import React from 'react';

import LogoV1 from '../../images/logo_v1.svg';
import * as modules from './index.module.scss';

const navs = [
  { label: 'Usecase', target: '#use-case' },
  { label: 'Team', target: '#team' },
  { label: 'Expenditure', target: '#expenditure' },
  { label: 'Roadmap', target: '#roadmap' },
];

const AppHeader: React.FC = () => {
  const handleScroll = (id: string) => {
    document.querySelector(id)?.scrollIntoView({
      behavior: 'smooth'
    });
  }

  return (
    <header className={modules.appHeader}>
      <LogoV1 />
      <div className={modules.navs}>
        {navs.map(nav => (
          <div key={nav.label} className="cursor-pointer" onClick={() => handleScroll(nav.target)}>
            {nav.label}
          </div>
        ))}
      </div>
    </header>
  );
}

export default AppHeader;
