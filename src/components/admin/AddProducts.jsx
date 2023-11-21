import { useState, useEffect } from "react";
import { db, storage } from "../../firebase/firebaseConfig";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { collection, addDoc, updateDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { AiOutlineCloudUpload } from "react-icons/ai";

export default function AddProducts() {
  const [newProductdata, setNewProductdata] = useState({});
  const uploadProductDataToFirebase = async (e, newProductdata) => {
    e.preventDefault();

    try {
      // Convert newProductdata.img object into an array of images
      const imagesArray = Object.values(newProductdata.img);

      const imageUrl = await Promise.all(
        imagesArray.map(async (product, index) => {
          const imageRef = ref(storage, `Images/${Date.now() + product.name}`);
          const uploadTask = uploadBytesResumable(imageRef, product);

          // Define a promise to wait for the upload to complete
          const uploadComplete = new Promise((resolve, reject) => {
            uploadTask.on(
              "state_changed",
              (snapshot) => {
                // Get the upload progress as a percentage
                const progress =
                  (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log(
                  `Image ${index + 1} Upload is ${progress.toFixed(2)}% done`
                );
              },
              reject, // Handle errors
              () => resolve(uploadTask) // Resolve when the upload is complete
            );
          });

          await uploadComplete;

          const downloadURL = await getDownloadURL(imageRef);
          return downloadURL; // Store the download URL in Firestore
        })
      );

      // Now that you have the download URLs, you can add them to the Firestore document
      const docRef = await addDoc(collection(db, "products"), {
        ...newProductdata,
        img: imageUrl, // Store the download URLs in Firestore
      });

      console.log("Product data uploaded successfully!");
    } catch (error) {
      console.error("Error uploading product data: ", error);
    }
  };

  const handelProductData = (e) => {
    const value = e.target.value;
    const files = e.target.files ;
    const name = e.target.name;
    setNewProductdata({
      ...newProductdata,
      [name]: name == "img" ? files : value,
    });
  
  };

  return (
    <div className="bg-blue-400 min-h-screen w-full overflow-hidden ">
      <div className="flex items-center justify-center  py-12 px-8">
        <div className="mx-auto w-full lg:w-1/2  bg-white rounded-md">
          <form className="py-6 px-9">
            <div className="mb-6 pt-4">
              <label className="mb-5 block text-xl font-semibold text-[#07074D]">
                Upload new
                <span className="text-blue-700 mr-1 "> staff's picks</span>
              </label>

              <div className="mb-8 space-y-4">
                <div>
                  <label className="block text-sm text-gray-500 dark:text-gray-300">
                    Product name
                  </label>

                  <input
                    onChange={handelProductData}
                    type="text"
                    name="productName"
                    placeholder="John Doe"
                    className="block bg-gray-50 mt-2 w-full placeholder-gray-400/70  rounded-lg border border-gray-200 px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40  "
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-500 dark:text-gray-300">
                    price
                  </label>

                  <input
                    onChange={handelProductData}
                    type="number"
                    name="price"
                    placeholder="John Doe"
                    className="block bg-gray-50 mt-2 w-full placeholder-gray-400/70  rounded-lg border border-gray-200 px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40  "
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-500 dark:text-gray-300">
                    Brand
                  </label>

                  <input
                    onChange={handelProductData}
                    name="brand"
                    type="text"
                    placeholder="John Doe"
                    className="block bg-gray-50 mt-2 w-full placeholder-gray-400/70  rounded-lg border border-gray-200 px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40  "
                  />
                </div>
                <input
                  onChange={handelProductData}
                  type="file"
                  accept="image/*"
                  name="img"
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
                      Uplaod image here
                    </span>
                  </div>
                </label>
              </div>

              {/* {data?.map((file, i) => {
                return (
                  <div key={i} className="rounded-md bg-[#F5F7FB] py-4 px-8">
                    <div className="flex items-center gap-3 justify-between">
                      <span className="truncate pr-3 text-base font-medium text-[#07074D]">
                        {file.name.length > 25
                          ? file.name.substring(0, 25) + " ..."
                          : file.name}
                      </span>
                      <button
                        // onClick={(e) => hanedlCancel(e, file.name)}
                        className="text-[#07074D]"
                      >
                        <svg
                          width="10"
                          height="10"
                          viewBox="0 0 10 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M0.279337 0.279338C0.651787 -0.0931121 1.25565 -0.0931121 1.6281 0.279338L9.72066 8.3719C10.0931 8.74435 10.0931 9.34821 9.72066 9.72066C9.34821 10.0931 8.74435 10.0931 8.3719 9.72066L0.279337 1.6281C-0.0931125 1.25565 -0.0931125 0.651788 0.279337 0.279338Z"
                            fill="currentColor"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M0.279337 9.72066C-0.0931125 9.34821 -0.0931125 8.74435 0.279337 8.3719L8.3719 0.279338C8.74435 -0.0931127 9.34821 -0.0931123 9.72066 0.279338C10.0931 0.651787 10.0931 1.25565 9.72066 1.6281L1.6281 9.72066C1.25565 10.0931 0.651787 10.0931 0.279337 9.72066Z"
                            fill="currentColor"
                          />
                        </svg>
                      </button>
                    </div>
                    <div className="relative mt-5 h-[6px] w-full rounded-lg bg-[#E2E5EF]">
                      <div className="absolute left-0 right-0 h-full w-[75%] rounded-lg bg-[#6A64F1]"></div>
                    </div>
                  </div>
                );
              })} */}
            </div>

            <div>
              <button
                onClick={(e) => uploadProductDataToFirebase(e, newProductdata)}
                className={`  w-full rounded-md   py-3 px-8 text-center hover_state text-base font-semibold bg-blue-400 text-white outline-none`}
              >
                Send File
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
