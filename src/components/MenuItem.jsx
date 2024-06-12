import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const MenuItem = ({ menu, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a href={menu.uri}
      className="w-10 h-10 rounded-full flex items-center 
      justify-center group cursor-pointer hover:bg-gradient-to-br
      hover:from-sunrise-dark via-sunrise hover:to-sunrise-light relative transition-colors duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <menu.Icon
        className="text-white text-lg transition-transform duration-300 transform group-hover:rotate-12"
      />
      <AnimatePresence>
        {isHovered && (
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="hidden lg:block absolute bg-white rounded-md px-4
            py-1 -left-[120px] shadow-lg after:absolute after:-right-1 after:top-2
            after:w-3 after:h-3 after:bg-white after:rotate-45"
            style={{ boxShadow: "inset 0px 4px 15px rgba(0,0,0,0.3)" }}
          >
            <p className="text-bgPrimary text-sm font-semibold">{menu?.name}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </a>
  );
};

export default MenuItem;
