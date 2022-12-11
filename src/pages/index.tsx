import React from "react";
import type { HeadFC, PageProps } from "gatsby";

import MovingGradientBackground from "../components/MovingGradientBackground";
import AppHeader from "../components/AppHeader";

import * as modules from "./index.module.scss";
import UseCase from "../containers/UseCase";
import FutureUseCase from "../containers/FutureUseCase";
import InvestmentRequired from "../containers/InvestmentExcept";
import ProjectRoadmap from "../containers/ProjectRoadmap";
import Tokenomics from "../containers/Tokenomics";
import ExpectedMarketCap from "../containers/ExpectedMarketCap";
import ContactUs from "../containers/ContactUs";
import AppFooter from "../components/AppFooter";
import WhatIsIt from "../containers/WhatIsIt";


const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <AppHeader />
      <div className={modules.mainSection}>
        <MovingGradientBackground />
        <div className={modules.subSlogan}>
          GOST PROTOCOL SYSTEM
        </div>
        <div className={modules.slogan}>
          <div>Pay and transfer privately</div>
          <div>safely and securely</div>
        </div>
        <div className={modules.comment}>
          <div>A transaction layer that obfuscates the transaction data so it can</div>
          <div>be veiled on-chain, thereby applying privacy to the transaction.</div>
        </div>
      </div>
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
