import React from 'react';
import CountUp from 'react-countup';
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

import { cardContainerVariants, cardVariants, titleVariants } from '../../config/variants';
import Divider from '../../components/Divider';

import * as modules from './index.module.scss';

const tokenomicsInfo = [
  { title: 'Team', value: 15 },
  { title: 'Private round / Investors', value: 30 },
  { title: 'Marketing expense', value: 10 },
  { title: 'Public IDO round', value: 30 },
  { title: 'Treasury', value: 5 },
  { title: 'Airdrops to early adopters / project on-boarding fund', value: 10 },
];

const Tokenomics: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true
  });
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true }}
      className="app-content-wrap flex flex-col gap-[96px] text-center min-h-screen pt-10 pb-32"
    >
      <motion.div variants={titleVariants} className="text-[40px] leading-[1.3] font-semibold">
        Tokenomics
      </motion.div>
      <motion.div ref={ref} className={modules.tokenomicsInfo} variants={cardContainerVariants}>
        <motion.div className={modules.tokenomicsCenterInfo} variants={cardVariants}>
          <div className="flex-1 flex flex-col items-center justify-center">
            <div className="text-[64px] font-semibold leading-[1.3] mb-2">
              <CountUp
                start={0}
                end={10}
                duration={1}
                delay={0.5}
                suffix=" million"
                redraw={inView}
              />
            </div>
            <div className="text-xl leading-[1.3]">Max Supply</div>
          </div>
          <Divider margin="my-10" />
          <div className="text-xl leading-normal text-left">Use: All transactions that use the GostPay system will need GHT tokens + Chain transaction tokens to execute. All used tokens will be burnt.</div>
        </motion.div>
        {tokenomicsInfo.map(info => (
          <motion.div
            key={info.title}
            className="bg-primary/5 p-8 xl:p-10 text-black rounded-3xl border-[0.5px]"
            variants={cardVariants}
          >
            <div className="text-5xl font-semibold italic mb-2 leading-[1.3]">
              <CountUp
                start={0}
                end={info.value}
                duration={1.5}
                delay={0.5}
                suffix="%"
                redraw={inView}
              />
            </div>
            <div className="opacity-60 leading-[1.3]">{info.title}</div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default Tokenomics;
