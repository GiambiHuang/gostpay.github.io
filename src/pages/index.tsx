import React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { motion } from "framer-motion";

import AppHeader from "../components/AppHeader";
import AppFooter from "../components/AppFooter";
import UseCase from "../containers/UseCase";
import FutureUseCase from "../containers/FutureUseCase";
import InvestmentRequired from "../containers/InvestmentExcept";
import ProjectRoadmap from "../containers/ProjectRoadmap";
import Tokenomics from "../containers/Tokenomics";
import ExpectedMarketCap from "../containers/ExpectedMarketCap";
import ContactUs from "../containers/ContactUs";
import WhatIsIt from "../containers/WhatIsIt";
import MainSection from "../containers/MainSection";
import MovingGradientBackground from "../components/MovingGradientBackground";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <MovingGradientBackground className="fixed top-0 bottom-[-48px]" />
      <AppHeader />
      <motion.div
        initial={{ filter: 'blur(150px)' }}
        animate={{ filter: 'blur(0px)' }}
        transition={{
          duration: 1,
          delay: 0.2,
          ease: [0, 0.71, 0.2, 1.01]
        }}
      >
        <MainSection />
      </motion.div>
      <div className="z-30 relative">
        <WhatIsIt />
      </div>
      <div id="use-case" className="z-30 bg-white relative">
        <UseCase />
      </div>
      <div className="z-30 bg-white relative">
        <FutureUseCase />
      </div>
      <div id="expenditure" className="z-30 bg-white relative">
        <InvestmentRequired />
      </div>
      <div id="roadmap" className="z-30 bg-white relative">
        <ProjectRoadmap />
      </div>
      <div className="z-30 bg-white relative">
        <Tokenomics />
      </div>
      <div className="z-30 bg-white relative">
        <ExpectedMarketCap />
      </div>
      <div className="z-30 bg-white relative">
        <ContactUs />
      </div>
      <AppFooter />
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>GostPay</title>
