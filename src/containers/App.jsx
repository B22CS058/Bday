import React from "react";
// import { AnimatePresence } from "framer-motion";
// import { Socials } from "../utils/helper";
// import { HomeSocialLinks } from "../components";
import { About, Contact, Header, Home, ParticlesContainer, Projects, ServiceCount } from "./"
import Game from "./Game";
// import VideoCall from "./VideoCall";

const App = () => {
  return (
    <div className="w-full xl:max-w-[1500px] mx-auto py-16 px-4 lg:px-8"style={{ backgroundColor: '#F8BBD0' }}>

      {/* particles container */}
      <ParticlesContainer />

      {/* <VideoCall /> */}
      {/* header */}
      <Header />

      {/* home container */}
      <Home />

      {/* services container */}
      <ServiceCount />

      {/* about container */}
      <About />

      <Game />

      {/* skills container */}
      {/* <Skills /> */}

      {/* projects container */}
      <Projects />

      {/* contact container */}
      <Contact />

      {/* footer container */}
      <div className="w-full flex flex-col items-center justify-start mt-24 mb-24">
        {/* <Map /> */}
        <p className="text-3xl tracking-wider text-texlight">Made with Love❤️❤️</p>
        {/* <div className="flex items-center justify-center gap-16 mt-16">
          <AnimatePresence>
            {Socials && Socials.map((item, index) => (
              <HomeSocialLinks key={index} data={item} index={index} />
            ))}
          </AnimatePresence>
        </div> */}
      </div>

    </div>
  );
};

export default App;
