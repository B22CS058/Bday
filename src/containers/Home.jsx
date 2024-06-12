import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Animated from "../assets/DC.jpg";
import "./Home.css"; // Import CSS file for styling
import { HeroTypeWritter } from "../components";
import { db } from "./firebase"; // Import the Firestore instance
import { collection, addDoc } from "firebase/firestore";

const Home = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [message, setMessage] = useState("");

  const handleSend = async () => {
    try {
      // Add a new document with the message to the 'wishes' collection
      await addDoc(collection(db, "wishes"), {
        message: message,
        timestamp: new Date(),
      });
      console.log("Message sent:", message);
      setMessage(""); // Clear the message input
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <section
      id="home"
      className="flex items-center justify-center flex-col gap-8 relative w-full min-h-screen"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-6xl">
        <div className="flex flex-col justify-center items-center gap-4">
          <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
            Hello, Deep Shikha
            <span className="block text-5xl lg:text-6xl mt-2">Happy Birthday, Love!</span>
          </h2>
          <h2 className="text-2xl lg:text-3xl">
            And I'm {" "}
            <HeroTypeWritter
              words={["your Lovee..", "your Best Friend..", "and your Vaibhi.."]}
              speed={80}
            />
          </h2>
          <p className="text-xl lg:text-2xl">
            Wishing you the happiest of birthdays, filled with love, laughter, and countless beautiful memories.
             You mean the world to me, and I'm grateful every day to have you in my life.
              Here's to many more incredible years together!

              </p>
              <p className="text-xl lg:text-2xl">
              
              Baar Baar din yeh aaye, baar baar hum yeh gaye tum jiyo hazaro saal yeh meri dua hai...Happy Birthday 
              to you, Happy Birthday to you...Happy Birthday dear Mitthu...Happy Birthday to you!!🎉🎂❤️
          </p>
          <p className="text-xl lg:text-2xl">Love you Cutie🥰🥰</p>
        </div>
        <div className="flex justify-center items-center">
          <div className="relative w-80 h-80 lg:w-96 lg:h-96">
            <AnimatePresence>
              {isHovered && (
                <motion.div
                  className="absolute inset-0 blur-md bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 rounded-full"
                ></motion.div>
              )}
              <motion.img
                src={Animated}
                alt="Original"
                className="absolute w-full h-full object-cover rounded-full home-image"
                initial={{ y: 0 }}
                animate={{ y: [-10, 10, -10] }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                  ease: "linear",
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              />
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Additional Features */}
      <div className="w-full max-w-4xl mt-12">
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Make a Wish..."
          className="w-full h-32 lg:h-40 rounded-md p-4 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:bg-gray-900"
        ></textarea>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleSend}
          className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-6 rounded mt-4 transition-transform"
        >
          Send❤️
        </motion.button>
      </div>
    </section>
  );
};

export default Home;
