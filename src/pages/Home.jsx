import { motion } from "framer-motion";
import React from "react";

const Home = () => {

  return (
    <motion.div initial={{y: 20, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{duration: 0.2, ease : "easeInOut"}} className="w-full h-screen relative">

      <h1 className="text-[#191919] text-center font-bold w-[25ch] text-8xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 tracking-tight">
        RD<span className="text-[#c00e28]">.</span>
      </h1>
      
    </motion.div>
  );
};

export default Home;
