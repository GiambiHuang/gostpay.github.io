import React from 'react';
import CountUp from 'react-countup';
import { useInView } from "react-intersection-observer";
import { motion, Variants } from "framer-motion";

import LogoBgSVG from '../../images/logo-bg.svg';

import * as modules from './index.module.scss';

const expenditureList = [
  { value: 50, desc: 'R&D Tech development Building SDK, core technologies' },
  { value: 20, desc: 'Marketing' },
  { value: 20, desc: 'Outsource technology development' },
  { value: 10, desc: 'Bug bounty' },
];

const rightSideVariants: Variants = {
  offscreen: {
    x: 50,
    opacity: 0.1,
  },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 0.5,
    }
  }
};

const leftSideVariants: Variants = {
  offscreen: {
    x: -50,
    opacity: 0.1,
  },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 0.5,
    }
  }
};

const InvestmentRequired: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true
  });

  return (
    <div className={modules.investmentContainer}>
      <div className="app-content-wrap">
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.5 }}
          className={modules.investmentCard}
        >
          <div className={modules.investmentRequired}>
            <motion.div variants={leftSideVariants}>
              <div className="text-2xl leading-8 mb-[106px]">Angel Investment Required</div>
              <div className="text-8xl leading-tight font-semibold">5-10 Million USD</div>
            </motion.div>
            <LogoBgSVG className="absolute bottom-0 right-0" />
          </div>
          <motion.div ref={ref} className={modules.investmentExpenditure} variants={rightSideVariants}>
            <div className="grid grid-cols-[minmax(auto,_180px)_minmax(auto,_180px)] gap-[60px] z-10">
              <div className="text-2xl leading-8 col-span-full">Expenditure</div>
              {expenditureList.map(item => (
                <div key={item.desc}>
                  <div className="text-5xl leading-[1.3] font-semibold mb-2">
                    <CountUp
                      start={0}
                      end={item.value}
                      duration={1}
                      delay={1}
                      suffix="%"
                      redraw={inView}
                    />
                  </div>
                  <div className="text-white/60 leading-[1.3]">{item.desc}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default InvestmentRequired;
