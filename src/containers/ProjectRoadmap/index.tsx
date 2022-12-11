import React from 'react';

import * as modules from './index.module.scss';

const roadmap = [
  { step: '01', title: 'Initial Development', desc: 'Development of GostPay on MOVE compatible blockchains (Aptos, Sui)' },
  { step: '02', title: 'GostPay Release', desc: 'Release GostPay as a individual product for normal transaction use: Transfer, Escrow' },
  { step: '03', title: 'GostBridge', desc: 'Launch GostBridge as a bridging service from Aptos / Sui to EVM compatible chains.' },
];

const ProjectRoadmap: React.FC = () => {
  return (
    <div className="app-content-wrap flex flex-col gap-[96px] text-center pt-36 pb-4">
      <div className="text-[40px] leading-[1.3] font-semibold">Project Roadmap</div>
      <div className="grid grid-cols-3 gap-6">
        {roadmap.map(item => (
          <div className={modules.roadmapItem} data-after={item.step} key={item.step}>
            <div className="text-lg leading-7 mb-2 opacity-30">Step {item.step}</div>
            <div className="text-2xl font-semibold leading-7 mb-12">{item.title}</div>
            <div className="leading-6">{item.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectRoadmap;
