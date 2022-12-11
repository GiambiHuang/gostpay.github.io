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

const cardVariants: Variants = {
  offscreen: {
    y: 20,
    opacity: 0.2,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
};

const InvestmentRequired: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  return (
    <div ref={ref} className={modules.investmentContainer}>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.6 }}
        className="app-content-wrap"
      >
        <motion.div className={modules.investmentCard} variants={cardVariants}>
          <div className={modules.investmentRequired}>
            <div className="text-2xl leading-8 mb-[106px]">Angel Investment Required</div>
            <div className="text-8xl leading-tight font-semibold">5-10 Million USD</div>
            <LogoBgSVG className="absolute bottom-0 right-0" />
          </div>
          <div className={modules.investmentExpenditure}>
            <div className="grid grid-cols-[minmax(auto,_180px)_minmax(auto,_180px)] gap-[60px] z-10">
              <div className="text-2xl leading-8 col-span-full">Expenditure</div>
              {expenditureList.map(item => (
                <div key={item.desc}>
                  <div className="text-5xl leading-[1.3] font-semibold mb-2">
                    <CountUp
                      start={0}
                      end={item.value}
                      duration={1}
                      suffix="%"
                      redraw={inView}
                    />
                  </div>
                  <div className="text-white/60 leading-[1.3]">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default InvestmentRequired;
