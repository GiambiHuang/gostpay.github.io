import React from 'react';
import cx from 'classnames';

interface IDivider {
  color?: string;
  margin?: string;
}

const Divider: React.FC<IDivider> = ({ color = 'border-black/10', margin = 'my-12' }) => {
  return (
    <div className={cx('border-b', color, margin)} />
  );
}

export default Divider;
