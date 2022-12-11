import React from 'react';
import { Gradient } from 'whatamesh';
import * as modules from './index.module.scss';

interface IMovingGradientBackground {
  id?: string;
}

const MovingGradientBackground: React.FC<IMovingGradientBackground> = ({ id = 'gradient-canvas' }) => {
  React.useEffect(() => {
    const gradient = new Gradient();
    gradient.initGradient(`#${id}`);
  }, []);

  return (
    <div className={modules.main}>
      <canvas className={modules.canvas} id={id} />
    </div>
  );
}

export default MovingGradientBackground;
