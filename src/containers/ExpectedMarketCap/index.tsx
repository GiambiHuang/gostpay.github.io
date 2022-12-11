import React from 'react';

import LogoFullSVG from '../../images/logo-full.svg';

const ExpectedMarketCap: React.FC = () => {
  return (
    <div className="app-content-wrap flex flex-col gap-[96px] text-center min-h-screen py-36">
      <div className="relative rounded-[48px] h-[600px] bg-primary flex px-16 items-center ">
        <div className="flex-1">
          <LogoFullSVG className="mx-auto" />
        </div>
        <div className="flex flex-col uppercase text-white text-left max-w-[830px] px-5">
          <div className="text-2xl leading-[1.3] mb-6">Expected Market Cap</div>
          <div className="text-[56px] leading-[1.3] font-semibold">Once launch expected market cap at 100 Million.</div>
        </div>
      </div>
    </div>
  );
}

export default ExpectedMarketCap;
