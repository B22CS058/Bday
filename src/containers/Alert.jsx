import React from "react";
import { motion } from "framer-motion";

const Alert = ({ status, message }) => {
  const statusConfig = {
    warning: {
      bgColor: "bg-highlightYellow",
      borderColor: "border-highlightYellow",
      textColor: "text-highlightYellow",
    },
    success: {
      bgColor: "bg-primary",
      borderColor: "border-primary",
      textColor: "text-primary",
    },
    danger: {
      bgColor: "bg-red-400",
      borderColor: "border-red-400",
      textColor: "text-red-400",
    },
  };

  const config = statusConfig[status];
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      className={`fixed top-12 right-12 px-3 py-3 rounded-md border ${config.borderColor} w-auto
      overflow-hidden backdrop-blur-md`}
    >
      <p className={`${config.textColor}`}>{message}</p>
      <div className="absolute inset-x-0 h-1 bottom-0 bg-[rgba(255,255,255,0.5)]">
        <motion.div
          className={`${config.bgColor} h-full`}
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          exit={{ width: 0 }}
          transition={{ duration: 4, delay: 0.5 }}
        ></motion.div>
      </div>
    </motion.div>
  );
};

export default Alert;
