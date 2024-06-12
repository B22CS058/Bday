import React from "react";

const ServiceCard = ({ count, text }) => {
  return (
    <div
      className="w-full lg:w-52 h-32 rounded-md border border-[rgba(255,255,255,0.3)] flex items-center justify-center
      flex-col gap-2 group hover:border-sunrise-light cursor-pointer relative bg-bgPrimary"
      style={{ boxShadow: "inset 0px 4px 15px rgba(255,255,255,0.3)" }}
    >
      <div className="absolute inset-0 hidden group-hover:block bg-gradient-to-br from-sunset-light via-sunrise to-sunset-dark blur-md -z-10"></div>
      <p className="text-2xl text-texlight group-hover:text-transparent group-hover:bg-clip-text 
      group-hover:bg-gradient-to-r group-hover:from-sunrise-light group-hover:via-sunrise 
      group-hover:to-sunset-dark capitalize font-sans tracking-widest">{count}</p>
      <p className="text-base text-texlight group-hover:text-white">{text}</p>
    </div>
  );
};

export default ServiceCard;
