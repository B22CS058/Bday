import React, { useEffect, useState } from "react";

const HeroTypeWritter = ({ words, speed }) => {
  const [ind, setInd] = useState(0);
  const [txt, setTxt] = useState("");

  useEffect(() => {
    let charIndex = 0;
    const word = words[ind];

    const typingInterval = setInterval(() => {
      setTxt(word.slice(0, charIndex));
      charIndex++;

      if (charIndex > word.length) {
        clearInterval(typingInterval);
        setTimeout(() => {
          setInd((prevIndex) => (prevIndex === words.length - 1 ? 0 : prevIndex + 1));
        }, 1000);
      }
    }, speed);

    return () => {
      clearInterval(typingInterval);
    };
  }, [ind, speed, words]);

  return (
    <span className="tracking-wider text-transparent bg-clip-text 
    bg-gradient-to-r from-sunrise-light via-sunrise to-sunset-dark mt-7">
      {txt}
    </span>
  );
};

export default HeroTypeWritter;
