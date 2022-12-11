import React from 'react';

import Divider from "../../components/Divider";
import FutureCase1Svg from "../../images/future-case_1.svg";
import FutureCase2Svg from "../../images/future-case_2.svg";
import FutureCase3Svg from "../../images/future-case_3.svg";
import * as modules from './index.module.scss';

const futureCases = [
  {
    icon: <FutureCase1Svg />,
    title: 'Scheduled / Contracted payment',
    description: 'The employer can set a scheduled monthly payment to employees fully managed by our smart contracts, this brings trust to a trustless space where the employer can set parameters in the smart contract which guarantees the employee of payment in any circumstance (monies held within smart contract), and due to the immutable nature of smart contracts, GostPay can be used as a escrow service within an organization or outside (contracted jobs, time-enabled release of funds or tokens).',
  },
  {
    icon: <FutureCase2Svg />,
    title: 'In the company DAO',
    description: 'A multisig functionality where the company can lock rewards or team tokens within GostPay through a voting process with private keys. Votes itself are privacy protected, which means no team member can see what others are voting or if they voted at all through any on-chain means. When vesting period is over, selected team members will be given the tokens pre-determined, and are also private. Further voting on different issues can be made possible too and private through immutable smart contracts that can be deployed for different voting purposes.',
  },
  {
    icon: <FutureCase3Svg />,
    title: 'Normal employee payment',
    description: 'Where the employer manually sends an employee private payroll through GostPay.',
  },
];

const FutureUseCase: React.FC = () => {
  return (
    <div className={modules.useCaseContainer}>
      <div id="future-use-case" className="text-[40px] font-semibold leading-[52px]">
        Future Use Case
        <br />
        For Businesses / Companies To-B
      </div>
      <div className="text-lg leading-normal mt-12 max-w-[830px]">
        A privacy payroll system. Allows companies to pay employees using privacy obfuscated payments, 
        the same principle can be applied to employee rewards, either in tokens or NFTs, within this framework, 
        there are other ways to implement this system:
      </div>
      <Divider />
      <div className={modules.useCaseList}>
        {futureCases.map(c => (
          <div key={c.title} className={modules.useCaseItem}>
            {c.icon}
            <div className="leading-7 font-semibold whitespace-nowrap text-[22px]">{c.title}</div>
            <div>{c.description}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FutureUseCase;
