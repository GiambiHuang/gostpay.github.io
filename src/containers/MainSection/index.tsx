import React from 'react';
import { motion, Variants } from "framer-motion";
import * as modules from "./index.module.scss";


const variants: Variants = {
  offscreen: {
    y: 50,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 0.8,
      delay: 0.3
    }
  }
};

const MainSection: React.FC = () => {
  return (
    <motion.div
      className={modules.mainSection}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: false, amount: 0.75 }}
    >
      <motion.div className={modules.subSlogan} variants={variants}>
        GOST PROTOCOL SYSTEM
      </motion.div>
      <motion.div className={modules.slogan} variants={variants}>
        <div>Pay and transfer privately</div>
        <div>safely and securely</div>
      </motion.div>
      <motion.div className={modules.comment} variants={variants}>
        <div>A transaction layer that obfuscates the transaction data so it can</div>
        <div>be veiled on-chain, thereby applying privacy to the transaction.</div>
      </motion.div>
    </motion.div>
  );
}

export default MainSection;
