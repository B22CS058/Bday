import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Leaf1, Leaf2 } from "../assets";
import { SkillCard } from "../components";

const Skills = () => {
  return (
    <section
      id="skills"
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
              Ratings
            </p>
            <img src={Leaf2} className="w-6 h-auto object-contain" alt="Leaf 2" />
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full px-8 lg:px-16">
        <div className="w-full flex flex-col gap-6 items-start justify-start">
          <h3 className="text-2xl text-transparent bg-clip-text bg-gradient-to-r 
              from-sunrise-light via-sunrise to-sunset-dark">My Skills & Work Experience</h3>
          <p className="text-gray-300 text-lg tracking-wide leading-relaxed">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Maxime, laborum. Harum debitis nihil suscipit fuga ex dolor 
            deserunt sit in facere voluptatibus modi laboriosam ea 
            quo optio rem, cumque delectus.
          </p>
          <p className="text-gray-300 text-lg tracking-wide leading-relaxed">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Maxime, laborum. Harum debitis nihil suscipit fuga ex dolor 
            deserunt sit in facere voluptatibus modi laboriosam ea 
            quo optio rem, cumque delectus.
          </p>
          <p className="text-gray-300 text-lg tracking-wide leading-relaxed">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Maxime, laborum. Harum debitis nihil suscipit fuga ex dolor 
            deserunt sit in facere voluptatibus modi laboriosam ea 
            quo optio rem, cumque delectus.
          </p>
        </div>
        <div className="w-full flex flex-wrap gap-4 items-center justify-center">
          <SkillCard skill={"HTML/ CSS"} percentage={"90%"} color={"#E74C3C"} move={true} />
          <SkillCard skill={"Javascript"} percentage={"75%"} color={"#FFB900"} move={false} />
          <SkillCard skill={"C/C++/Python"} percentage={"95%"} color={"#1ABC9C"} move={true} />
          <SkillCard skill={"React.js/ Node.js"} percentage={"80%"} color={"#F1C40F"} move={false} />
          <SkillCard skill={"Firebase/ MongoDB"} percentage={"75%"} color={"#9B59B6"} move={true} />
          <SkillCard skill={"Pandas/ Numpy/ scikit-learn/ OpenCV"} percentage={"80%"} color={"#D35400"} move={false} />
        </div>
      </div>
    </section>
  );
};

export default Skills;
