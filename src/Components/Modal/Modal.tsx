import classNames from 'classnames';
import React from 'react';

import styles from './Modal.module.scss';

type PropTypes = {
  active: boolean;
  setActive: (active: boolean) => void;
  children: React.ReactNode;
};

export const Modal: React.FC<PropTypes> = ({ active, setActive, children }) => {
  return (
    <button
      type="button"
      className={classNames(
        styles.modale,
        {
          'pointer-events-auto opacity-100': active,
        },
      )}
      onClick={() => setActive(false)}
    >
      <button
        type="button"
        className="rounded bg-[#ddd] w-[50vw] p-5 border-[none]"
        onClick={e => e.stopPropagation()}
      >
        {children}
      </button>
    </button>
  );
};
