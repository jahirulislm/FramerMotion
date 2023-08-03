import React from "react";
import { motion, useAnimation } from "framer-motion";
const FifthAnim = () => {
  const control = useAnimation();

  return (
    <div className="container">
      <button
        onClick={() => {
          control.start({
            x: 150,
            borderRadius: 10,
            transition: {
              duration: 2,
            },
          });
        }}
      >
        Move Right
      </button>
      <button
        onClick={() => {
          control.start({
            x: 0,
            transition: {
              duration: 2,
            },
          });
        }}
      >
        Move Left
      </button>
      <button
        onClick={() => {
          control.start({
            borderRadius: 1500,
          });
        }}
      >
        Move Circle
      </button>
      <button
        onClick={() => {
          control.start({
            borderRadius: 0,
            transition: {
              duration: 2,
            },
          });
        }}
      >
        Move Square
      </button>
      <button
        onClick={() => {
          control.stop();
        }}
      >
        Stop
      </button>
      <motion.div className="box" animate={control}></motion.div>
    </div>
  );
};

export default FifthAnim;
