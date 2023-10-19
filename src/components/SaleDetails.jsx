import { Carousel } from "react-responsive-carousel";
import { useParams } from "react-router-dom";
import PRODUCTS from "../data";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useState, useRef, useEffect } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import Counter from "./Counter";

export default function SaleDetails() {
  const { id } = useParams();
  const product = PRODUCTS.find((item) => item.id == id);
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRefs = product.videos.map(() => useRef(null)); // Create an array of video refs
  const [isPlaying, setIsPlaying] = useState(false);
  const [isControlsVisible, setIsControlsVisible] = useState(true);

  const changeVideo = (index) => {
    videoRefs.forEach((ref, i) => {
      if (i === index) {
        ref.current.pause();
        setIsPlaying(false); // Start playing the selected video
        setIsControlsVisible(true); // Show controls when a video is started
      } 
    });
    setCurrentIndex(index);
  };


  const togglePlay = () => {
    const currentVideoRef = videoRefs[currentIndex];
    if (currentVideoRef.current) {
      if (!isControlsVisible) {
        currentVideoRef.current.pause();
      } else {
        currentVideoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleControls = () => {
    setIsControlsVisible(!isControlsVisible);
  };

  // Pause all videos when the component unmounts
  useEffect(() => {
    return () => {
      videoRefs.forEach((ref) => {
        if (ref.current) {
          ref.current.pause();
        }
      });
    };
  }, []);

  return (
    <div className="relative">
      <Counter />
      <div className="video-player container  m-auto  pt-6 px-3 sm:px-0 relative">
        <Carousel
          showThumbs={false}
          showIndicators={false}
          showArrows={false}
          showStatus={false}
          selectedItem={currentIndex}
          onChange={(index) => changeVideo(index)}
        >
          {product.videos.map((video, index) => (
            <div key={index} className="relative">
              <video
                ref={videoRefs[index]}
                controls
                className="w-full rounded-xl shadow-md"
                onClick={toggleControls}
                key={index}
              >
                <source src={video} type="video/mp4" />
              </video>
              {isControlsVisible && (
                <div className="absolute top-0 left-0 bg-black/50 rounded-xl w-full h-full">
                  <button
                    className="absolute top-1/2 z-30 left-1/2 transform -translate-x-1/2 -translate-y-1/2  text-white p-2 rounded-full cursor-pointer"
                    onClick={() => {
                      toggleControls();
                      togglePlay();
                    }}
                  >
                    <AiFillPlayCircle className="text-5xl" />
                  </button>
                </div>
              )}
            </div>
          ))}
        </Carousel>
        <div className="video-thumbnails w-full justify-center flex p-4 ">
          {product.images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Thumbnail ${index}`}
              className={`w-24 cursor-pointer ${
                currentIndex === index ? "border-2 border-blue-500" : ""
              }`}
              onClick={() => {
                videoRefs[currentIndex].current.pause();
                changeVideo(index);
              }}
            />
          ))}
        </div>
        <div className="w-full text-center mt-6">
          <h1 className="text-2xl text-slate-900 mb-1 text-center font-extrabold capitalize">
            staff picks{" "}
          </h1>
          <p className="text-gray-400 text-sm">
            Rems hand selected by steve and the team on day one of the entrering
            an un-prepped home
          </p>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2  justify-items-center justify-center gap-y-4 gap-x-2 mt-10 mb-5">
          {product.items.map((val, i) => (
            <div key={i} className="mb-0.5 py-1 px-1 sm:px-2">
              <div className="bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                <div>
                  <div>
                    <img
                      src={val.images[0]}
                      alt="Product"
                      className="h-60 w-full object-cover rounded-t-xl"
                    />
                  </div>
                  <div className="px-1 sm:px-2 py-1 sm:py-2">
                    <span className="text-gray-400 mr-1 uppercase text-xs">
                      Brand
                    </span>
                    <p className="text-md font-bold text-black truncate block capitalize">
                      {val.title}
                    </p>
                    <div className="flex items-center">
                      <p className="text-md font-semibold text-black cursor-auto my-1">
                        <span className="text-gray-400 mr-1 uppercase text-xs">
                          Start from
                        </span>{" "}
                        ${val.price}
                      </p>

                      <div className="ml-auto">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          fill="currentColor"
                          className="bi bi-bag-plus"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fillRule="evenodd"
                            d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                          />
                          <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
