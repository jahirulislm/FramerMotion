import React from "react";
import { motion } from "framer-motion";
const secondAmin = () => {
  return (
    <>
      <div className="container">
        <motion.div className="box" whileHover={{ scale: 1.1 }}>
          <h1>Jahirul Islam</h1>
        </motion.div>
      </div>
    </>
  );
};

export default secondAmin;
