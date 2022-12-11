import React from 'react';

import LogoV1 from '../../images/logo_v1.svg';
import Divider from '../Divider';

const navs = [
  { label: 'Email', href: '' },
  { label: 'Twitter', href: '' },
  { label: 'Medium', href: '' },
  { label: 'Telegram', href: '' },
  { label: 'Docs', href: '' },
];

const AppFooter: React.FC = () => {
  return (
    <footer className="z-30 relative bg-white">
      <div className="app-content-wrap pb-24">
        <LogoV1 />
        <Divider />
        <div className="flex justify-between items-center">
          <div className="text-sm opacity-60 max-w-[440px] pr-5">A transaction layer that obfuscates the transaction data so it can be veiled on-chain, thereby applying privacy to the transaction.</div>
          <nav className="flex gap-8 md:gap-16">
            {navs.map(nav => (
              <div key={nav.label}>
                <a className="text-black text-base" href={nav.href}>
                  {nav.label}
                </a>
              </div>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default AppFooter;
