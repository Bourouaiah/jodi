import { Carousel } from "react-responsive-carousel";
import { useParams } from "react-router-dom";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useState, useRef, useEffect } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import Counter from "./Counter";
import { useSelector } from "react-redux";
import Loader from "./Loader";

export default function SaleDetails() {
  let { videos, loader } = useSelector((store) => store.db); // array of arrays
  const { id } = useParams();
const storedArray = JSON.parse(localStorage.getItem("myArray"));

  console.log(videos, "videos");
    const product = videos?.find((item) => item.id == id);
   
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRefs = product?.videos?.map(() => useRef(null)); // Create an array of video refs
  const [isPlaying, setIsPlaying] = useState(false);
  const [isControlsVisible, setIsControlsVisible] = useState(true);

  const changeVideo = (index) => {
    videoRefs?.forEach((ref, i) => {
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
    if (videoRefs && videoRefs.length > 0) {
      return () => {
        videoRefs.forEach((ref) => {
          if (ref.current) {
            ref.current.pause();
          }
        });
      };
    }
  }, []);
  if (!videos || !loader) {
    return <Loader />;
  }
  return (
    <div className="relative">
      <Counter />
      {!loader ? (
        <Loader />
      ) : (
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
            {product?.videos?.map((img, index) => (
              <video
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
              >
                <source src={img} type="video/mp4" />
              </video>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
