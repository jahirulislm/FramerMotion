import React, { useState } from "react";
import { motion } from "framer-motion";

const FirstAnim = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  return (
    <>
      <div className="container">
        <motion.div
          className="box"
          // style={{ opacity: 0.2 }}
          animate={{
            // scale: [1, 2, 2, 1, 1],
            // rotate: [0, 0, 270, 270, 0],
            // borderRadius: ["20%", "20%", "50%", "50%", "20%"],
            x: isAnimating ? 370 : 0,
            opacity: isAnimating ? 1 : 0.5,
            rotate: isAnimating ? 360 : 10,
          }}
          initial={{
            opacity: 0.1,
          }}
          transition={{
            type: "spring",
            stiffness: 400,
          }}
          onClick={() => setIsAnimating(!isAnimating)}
        ></motion.div>
      </div>
    </>
  );
};

export default FirstAnim;
