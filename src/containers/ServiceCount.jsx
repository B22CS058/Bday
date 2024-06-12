import React from "react";
import { ServiceCard } from "../components";

const ServiceCount = () => {
  return (
    <section id="dates" className="w-full py-8 lg:py-5 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-texlight mb-8">
          Important Dates...
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-8">
          <ServiceCard count={"16th July"} text={"Thummi's B'day"} />
          <ServiceCard count={"25th May"} text={"Hamar Janamdindiwas"} />
          <ServiceCard count={"29th May"} text={"Thummi Proposed"} />
          <ServiceCard count={"1st August"} text={"Propose Day"} />
          <ServiceCard count={"26th May 2024"} text={"You know why"} />
          <ServiceCard count={"2028"} text={"No comments..."} />
        </div>
      </div>
    </section>
  );
};

export default ServiceCount;
