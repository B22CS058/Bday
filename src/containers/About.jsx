import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Leaf1, Leaf2 } from "../assets";
import video from "../assets/D6.mp4";
import './about.css'; // Make sure to import the CSS file

const About = () => {
  return (
    <section
      id="about"
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
            <img src={Leaf1} className="w-10 h-auto object-contain" alt="Leaf 1" />
            <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r 
              from-sunrise-light via-sunrise to-sunset-dark items-center justify-center text-center">
              Message
            </p>
            <img src={Leaf2} className="w-10 h-auto object-contain" alt="Leaf 2" />
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full px-8 lg:px-16">
        <div className="w-full flex items-center justify-center">
          <div className="video-container relative w-full lg:w-96 p-[2px] rounded-md bg-cream">
            <motion.div
              className="w-full rounded-md h-auto"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <video
                src={video}
                className="video-cropped w-full h-auto rounded-md object-cover"
                controls
                alt="Profile Video"
              />
            </motion.div>
            <div className="absolute w-full h-full -top-3 -left-2 bg-gradient-to-r from-sunrise-light via-sunrise to-sunset-dark rounded-md blur-[8px] -z-10"></div>
          </div>
        </div>
        <div className="w-full flex flex-col gap-6 items-start justify-start bg-[#F5DEB3] rounded-md shadow-lg p-6">
          <h3 className="text-2xl text-pink-500">I Love You!!</h3>
          <p className="text-pink-500 text-lg tracking-wide leading-relaxed">
            Chhota sa kona,
            <br />
            Your Heart
          </p>
          <p className="text-pink-500 text-lg tracking-wide leading-relaxed">
            Dinank: 16 July 2024
          </p>
          <p className="text-pink-500 text-lg tracking-wide leading-relaxed">
            Dear Kareja,
          </p>
          <p className="text-gray-700 text-lg tracking-wide leading-relaxed">
            This is to bring to your kind notice that I am Vaibhav Gupta, your boyfriend.
            And I am feeling highly obliged to wish you a Very Happy Birthday to you my dear Thummi.
          </p>
          <p className="text-gray-700 text-lg tracking-wide leading-relaxed">
            On this auspicious day I wish you a very Happy life ahead and also I wanted to say I Love You but Let us say it
            at the end. And yes currently kuchhu gift naikhi det ekar mane e na hate ki gift na mili, mil jayi
            chinta mat karihe. Achha ha partiya kab debe re tayi Sarnath aawa tare na dihe humke party.
            Are ha iho boleke rahe u upara tani mani cheesy ho gayini jaye dihe😅😅. Auri ha Hum tahra ke pyaar kareni😘😍.
          </p>
          <p className="text-gray-700 text-lg tracking-wide leading-relaxed">
            Thank you for being my best friend, my lovee, my don, my cutie, my thummi and what not.
             And yes don't worry in these difficult times, they are gonna end soon.
             <br/>
             Stay Safe!!
             <br />
             Love you💕💕
          </p>
          <p className="text-pink-500 text-lg tracking-wide leading-relaxed">
            With all my love,
            <br />
            Vaibhi
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
