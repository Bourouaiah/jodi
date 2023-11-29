import { useState, useEffect } from "react";
import { db, storage } from "../../firebase/firebaseConfig";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useDispatch, useSelector } from "react-redux";
import { handelFormSales, handelProgressVideos } from "../../redux/DbSlice";
import { collection, addDoc, updateDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { AiOutlineCloudUpload } from "react-icons/ai";

import Loader from "../Loader";
import Halmet from "../Halmet";
export default function Upload() {
  // const { addedSales } = useSelector((store) => store.db);
  // console.log(progressProducts, "progressProducts");
  const [isClicked, setIsClicked] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const dispatch = useDispatch();
  const [newProductdata, setNewProductdata] = useState({});

  const [averageProgressVideos, setAverageProgressVideos] = useState([]);

  const handelVideo = (e) => {
    const files = e.target.files;
    const value = e.target.value;
    if (files) {
      setNewProductdata({
        ...newProductdata,
        videos: Array.from(files),
      });
    } else {
      setNewProductdata({
        ...newProductdata,
        saleLocation: value,
      });
    }
  };

  useEffect(() => {
    if (newProductdata?.videos?.length > 0) {
      setAverageProgressVideos(Array(newProductdata.videos.length).fill(0));
    }
  }, [newProductdata.videos]);

  const uploadProductDataToFirebase = async (e, newProductdata) => {
    e.preventDefault();
    setIsClicked(true);
    try {
      const uploadTasks = newProductdata.videos.map((product) => {
        const videoRef = ref(storage, `Videos/${Date.now() + product.name}`);
        return uploadBytesResumable(videoRef, product);
      });

      const uploadPromises = uploadTasks.map((uploadTask, index) => {
        return new Promise(async (resolve, reject) => {
          uploadTask.on("state_changed", (snapshot) => {
            // Track progress for each video upload
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setAverageProgressVideos((prevProgress) => {
              return prevProgress.map((item, i) =>
                i === index ? Math.round(progress) : item
              );
            });
          });

          try {
            await uploadTask;
            const downloadURL = await getDownloadURL(
              uploadTasks[index].snapshot.ref
            );
            resolve(downloadURL);
          } catch (error) {
            reject(error);
          }
        });
      });

      const videoUrls = await Promise.all(uploadPromises);

      // Check if all uploads are completed
      const allUploadsFinished = videoUrls.every((url) => url !== undefined);
      console.log(allUploadsFinished, "allUploadsFinished");
      setIsFinished(allUploadsFinished);
   
      if (allUploadsFinished) {
        // All uploads are finished
        const docRef = await addDoc(collection(db, "videos"), {
          saleLocation: newProductdata.saleLocation,
          videos: videoUrls,
        });
         location.reload();
      } else {
        // Handle incomplete uploads
        console.error("Some uploads failed or are incomplete.");
      }
         
    } catch (error) {
      console.error("Error uploading product data: ", error);
    }
  };


  // add videos to state
  // localStorage.clear();
  const { loader: ld } = useSelector((store) => store.db);
  return (
    <Halmet title="admin">
      <div className="bg-blue-400 min-h-screen w-full ">
        {!ld ? (
          <Loader />
        ) : (
          <div className="flex items-center justify-center  py-12 px-8">
            <div className="mx-auto w-full lg:w-1/2  bg-white rounded-md">
              <form className="py-6 px-9">
                <div className="mb-6 pt-4">
                  <label className="mb-5 block text-xl font-semibold text-[#07074D]">
                    Upload new
                    <span className="text-blue-700 mr-1 "> Sale</span>
                  </label>
                  {isClicked && (
                    <h3 className="text-red-400 my-3 text-center ">
                      The upload has begun; please avoid moving or refreshing
                      until it finishes.
                    </h3>
                  )}
                  <div className="mb-8 space-y-4">
                    <div>
                      <label className="block text-sm text-gray-500 dark:text-gray-300">
                        House location
                      </label>

                      <input
                        onChange={handelVideo}
                        type="text"
                        value={newProductdata.saleLocation}
                        placeholder="John Doe"
                        className="block bg-gray-50 mt-2 w-full placeholder-gray-400/70  rounded-lg border border-gray-200 px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40  "
                      />
                    </div>
                    <input
                      onChange={handelVideo}
                      type="file"
                      multiple
                      accept="video/*"
                      name="file"
                      id="file"
                      className="sr-only"
                    />
                    <label
                      htmlFor="file"
                      className="relative flex min-h-[200px] items-center justify-center rounded-md border-[3px]
                    border-dashed border-[#e0e0e0] p-12 text-center"
                    >
                      <div className="m-auto">
                        <span className="text-center m-auto flex justify-center items-center w-full">
                          <AiOutlineCloudUpload className="text-4xl mb-3 text-blue-600" />
                        </span>

                        <span className="mb-2 block text-xl font-semibold text-[#07074D]">
                          Uplaod videos here
                        </span>
                      </div>
                    </label>
                  </div>

                  {newProductdata?.videos?.map((file, i) =>
                    averageProgressVideos[i] == 100 ? (
                      <h1 className="text-gren-300 text-center my-3 " key={i}>
                        done
                      </h1>
                    ) : (
                      <div
                        key={i}
                        className="rounded-md bg-[#F5F7FB] py-4 px-8"
                      >
                        <div className="flex items-center gap-3 justify-between">
                          <span className="truncate pr-3 text-base font-medium text-[#07074D]">
                            {file.length > 25
                              ? file.name.substring(0, 25) + " ..."
                              : file.name}
                          </span>
                          <p>{averageProgressVideos[i] || 0}%</p>
                        </div>
                        <div className="relative mt-5 h-[6px] w-full rounded-lg bg-[#E2E5EF]">
                          <div
                            style={{
                              width: `${averageProgressVideos[i]}%`,
                            }}
                            className={`absolute transition duration-300  linear left-0 right-0 h-full  rounded-lg bg-[#6A64F1]`}
                          ></div>
                        </div>
                      </div>
                    )
                  )}
                </div>

                <div>
                  <button
                    onClick={(e) =>
                      uploadProductDataToFirebase(e, newProductdata)
                    }
                    className={`  w-full rounded-md   py-3 px-8 text-center hover_state text-base font-semibold bg-blue-400 text-white outline-none`}
                  >
                    Send File
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </Halmet>
  );
}
