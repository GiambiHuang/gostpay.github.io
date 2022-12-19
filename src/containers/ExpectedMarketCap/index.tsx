import React from 'react';
import { motion, Variants } from 'framer-motion';
import MovingGradientBackground from '../../components/MovingGradientBackground';

import LogoFullSVG from '../../images/logo-full.svg';

const cardVariants: Variants = {
  offscreen: {
    y: 25,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 1.5,
      delay: 0.5,
    }
  }
}

const ExpectedMarketCap: React.FC = () => {
  return (
    <div className="app-content-wrap min-h-screen pt-10 pb-32">
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true }}
        variants={cardVariants}
        className="relative rounded-[48px] bg-primary overflow-hidden"
      >
        <MovingGradientBackground id="expected-market-cap-bg" className="absolute top-0 left-0 bottom-0 right-0 z-10" />
        <div className="flex items-center z-20 h-[600px] px-16 relative">
          <div className="flex-1">
            <LogoFullSVG className="mx-auto" />
          </div>
          <div className="flex flex-col uppercase text-white text-left max-w-[830px] px-5">
            <div className="text-2xl leading-[1.3] mb-6">Expected Market Cap</div>
            <div className="text-[56px] leading-[1.3] font-semibold">Once launch expected market cap at 100 Million.</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default ExpectedMarketCap;
