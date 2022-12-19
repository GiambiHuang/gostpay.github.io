import React from 'react';
import { Gradient } from 'whatamesh';
import cx from 'classnames';

import * as modules from './index.module.scss';

interface IMovingGradientBackground {
  id?: string;
  className?: string;
}

const MovingGradientBackground: React.FC<IMovingGradientBackground> = ({ id = 'gradient-canvas', className = '' }) => {
  React.useEffect(() => {
    const gradient = new Gradient();
    gradient.initGradient(`#${id}`);
  }, []);

  return (
    <div className={cx(className)}>
      <canvas className={modules.canvas} id={id} data-js-darken-top data-transition-in />
    </div>
  );
}

export default MovingGradientBackground;
