import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Leaf1, Leaf2 } from "../assets";
import { storage } from "./firebase";
import { ref, uploadBytesResumable, getDownloadURL, listAll } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { CustomPrevArrow, CustomNextArrow } from "../components/customArrows";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Memories = () => {
  const [memories, setMemories] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [file, setFile] = useState(null);
  const [enlargedMedia, setEnlargedMedia] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    fetchMemories();
  }, []);

  const fetchMemories = async () => {
    const listRef = ref(storage, 'memories/');
    const res = await listAll(listRef);
    const urls = await Promise.all(res.items.map(item => getDownloadURL(item)));
    setMemories(urls);
  };

  const handleUpload = () => {
    if (file) {
      const storageRef = ref(storage, `memories/${uuidv4()}`);
      const uploadTask = uploadBytesResumable(storageRef, file);
      setUploading(true);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Progress handler
        },
        (error) => {
          // Error handler
          console.error(error);
          setUploading(false);
        },
        () => {
          // Completion handler
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setMemories((prev) => [...prev, downloadURL]);
            setUploading(false);
          });
        }
      );
    }
  };

  const handleMediaClick = (index) => {
    setEnlargedMedia(memories[index]);
    setCurrentIndex(index);
  };

  const closeEnlargedView = () => {
    setEnlargedMedia(null);
  };

  const showNextMedia = () => {
    const nextIndex = (currentIndex + 1) % memories.length;
    setEnlargedMedia(memories[nextIndex]);
    setCurrentIndex(nextIndex);
  };

  const showPrevMedia = () => {
    const prevIndex = (currentIndex - 1 + memories.length) % memories.length;
    setEnlargedMedia(memories[prevIndex]);
    setCurrentIndex(prevIndex);
  };

  const isVideo = (url) => {
    const videoExtensions = ['mp4', 'webm', 'ogg'];
    const extension = url.split('.').pop();
    return videoExtensions.includes(extension);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section
      id="projects"
      className="flex items-center justify-center flex-col gap-12 my-12"
    >
      <div className="w-full flex items-center justify-center py-24">
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: 200 }}
            exit={{ opacity: 0, width: 0 }}
            transition={{ delay: 0.4 }}
            className="flex items-center justify-center gap-4"
          >
            <img src={Leaf1} className="w-6 h-auto object-contain" alt="Leaf 1" />
            <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r 
              from-sunrise-light via-sunrise to-sunset-dark">
              Memories
            </p>
            <img src={Leaf2} className="w-6 h-auto object-contain" alt="Leaf 2" />
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="w-full flex items-center justify-center py-4">
        <input
          type="file"
          accept="image/*,video/*"
          onChange={(e) => setFile(e.target.files[0])}
          className="mb-4"
        />
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-md flex items-center gap-2"
          onClick={handleUpload}
          disabled={uploading}
        >
          {uploading ? <AiOutlineLoading3Quarters className="animate-spin" /> : "Yaadein"}
        </button>
      </div>
      <div className="relative w-full px-8 lg:px-16">
        <CustomPrevArrow onClick={() => sliderRef.current.slickPrev()} />
        <Slider ref={sliderRef} {...settings}>
          {memories && memories.map((url, index) => (
            <div key={index} className="p-4">
              {isVideo(url) ? (
                <video
                  src={url}
                  className="w-11/12 h-48 object-cover rounded-md cursor-pointer transition-transform transform hover:scale-105"
                  onClick={() => handleMediaClick(index)}
                  controls
                />
              ) : (
                <img
                  src={url}
                  alt={`Memory ${index}`}
                  className="w-11/12 h-48 object-cover rounded-md cursor-pointer transition-transform transform hover:scale-105"
                  onClick={() => handleMediaClick(index)}
                />
              )}
            </div>
          ))}
        </Slider>
        <CustomNextArrow onClick={() => sliderRef.current.slickNext()} />
      </div>
      {enlargedMedia && (
        <div
          className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75 z-50"
        >
          <FaArrowLeft
            className="absolute left-4 text-white text-3xl cursor-pointer"
            onClick={showPrevMedia}
          />
          {isVideo(enlargedMedia) ? (
            <video
              src={enlargedMedia}
              className="max-w-full max-h-full rounded-md"
              controls
              autoPlay
            />
          ) : (
            <img
              src={enlargedMedia}
              alt="Enlarged Memory"
              className="max-w-full max-h-full rounded-md"
              onClick={closeEnlargedView}
            />
          )}
          <FaArrowRight
            className="absolute right-4 text-white text-3xl cursor-pointer"
            onClick={showNextMedia}
          />
        </div>
      )}
    </section>
  );
};

export default Memories;
