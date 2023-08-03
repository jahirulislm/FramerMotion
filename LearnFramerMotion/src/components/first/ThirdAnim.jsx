import React, { useState } from "react";
import { motion } from "framer-motion";

const ThirdAnim = () => {
  const boxVaraint = {
    hidden: {
      x: "-100",
    },
    visible: { x: 0 },
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
    // lion: {
    //   x: 100,
    //   scale: 1.5,
    //   backgroundColor: "green",
    // },
    // elep: {
    //   x: 100,
    //   scale: 1,
    //   backgroundColor: "green",
    // },
  };

  const listVariant = {
    hidden: {
      x: -10,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
    },
  };
  return (
    <>
      <div className="container">
        <motion.div
          className="box"
          variants={boxVaraint}
          initial="hidden"
          animate="visible"
        >
          {[1, 2, 3].map((i) => {
            return (
              <motion.li className="boxitem" variants={listVariant}></motion.li>
            );
          })}
        </motion.div>
      </div>
    </>
  );
};

export default ThirdAnim;
