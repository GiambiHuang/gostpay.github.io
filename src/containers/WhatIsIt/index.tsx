import React from 'react';
import { motion, Variants } from "framer-motion";

import WhatIsItSvg from "../../images/what-is-it.svg";
import LogoIcon from "../../images/logo_icon_v1.svg";
import * as modules from './index.module.scss';

const svgVariants: Variants = {
  offscreen: {
    x: 30,
    opacity: 0,
    scale: 1
  },
  onscreen: {
    x: 10,
    opacity: 1,
    scale: 1.1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
};

const contentVariants: Variants = {
  offscreen: {
    x: -20,
    opacity: 0,
  },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
};

const WhatIsIt: React.FC = () => {
  return (
    <div className={modules.whatIsIt}>
      <div className={modules.whatIsItContainer}>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
        >
          <motion.div variants={contentVariants}>
            <div className={modules.whatIsItDescription}>
              <div>
                <LogoIcon />
              </div>
              <div className="font-semibold text-[40px] leading-none">What is it?</div>
              <div className="text-xl leading-normal">
                A transaction layer that obfuscates the transaction
                <br />
                data so it can be veiled on-chain, thereby applying
                <br />
                privacy to the transaction.
              </div>
              <div className={modules.whatIsItTags}>
                <span>Transaction</span>
                <span>Veiled</span>
                <span>Privacy</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
        >
          <motion.div variants={svgVariants}>
            <WhatIsItSvg className={modules.whatIsItImage} />
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default WhatIsIt;
