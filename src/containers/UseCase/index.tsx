import React from 'react';
import { motion, Variants } from "framer-motion";

import Divider from "../../components/Divider";
import UserCase1Svg from "../../images/use-case_1.svg";
import UserCase2Svg from "../../images/use-case_2.svg";
import UserCase3Svg from "../../images/use-case_3.svg";
import UserCase4Svg from "../../images/use-case_4.svg";
import UserCase5Svg from "../../images/use-case_5.svg";
import UserCase6Svg from "../../images/use-case_6.svg";
import * as modules from './index.module.scss';

const cases = [
  {
    icon: <UserCase1Svg />,
    title: 'Transfers',
    description: 'GostPay can be a service to use to do anonymous transactions of tokens or NFTs.',
  },
  {
    icon: <UserCase2Svg />,
    title: 'Bridge',
    description: 'GostPay can be implemented as a bridge between multiple blockchains, across multiple technologies (EVM, Move, Rust-based chains).',
  },
  {
    icon: <UserCase3Svg />,
    title: 'Privacy Dex and Trading Platforms',
    description: 'GostPay has plans to develop our own privacy enabled Dex with zero knowledge order books and untraceable order execution.',
  },
  {
    icon: <UserCase4Svg />,
    title: 'Digital ID (DID) and  KYC services',
    description: 'Privacy centric technologies are useful against leaking of personal information, we are bringing this to use in digital identification and KYC services that can be implemented on-chain on any projects big or small.',
  },
  {
    icon: <UserCase5Svg />,
    title: 'Escrow service',
    description: 'GostPay can be used as a privacy escrow service that can be setup through our interface, automatically deployment of smart contracts, providing users to easily set up escrow quickly and easily, again, bringing trust to a trustless space.',
  },
  {
    icon: <UserCase6Svg />,
    title: 'GostTools',
    description: 'A set of tools that we will create for all users in this space to use, all based on GostPay’s core technologies and are available to everyone, these are a few to start with, but won’t be limited to: privacy bots for minting NFTs, buy sell bots for mili-second execution of on chain trades, Flashbots for MEV bot attack prevention and so on.',
  }
];

const caseVariants: Variants = {
  offscreen: {
    x: 10,
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

const UseCase: React.FC = () => {
  return (
    <div className={modules.useCaseContainer}>
      <div className="text-[40px] font-semibold leading-[52px]">
        Use Case
        <br />
        For Private Users (Customers) To-C
      </div>
      <Divider />
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.25 }}
        className={modules.useCaseList}
      >
        {cases.map(c => (
          <motion.div key={c.title} className={modules.useCaseItem} variants={caseVariants}>
            {c.icon}
            <div className="text-2xl leading-7 font-semibold whitespace-nowrap">{c.title}</div>
            <div>{c.description}</div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default UseCase;
