/* eslint-disable react/jsx-filename-extension */
import React, { ChangeEvent } from 'react';

import styles from './InputField.module.scss';

type PropTypes = {
  error: string | undefined,
  touched: boolean | undefined;
  values: string | number;
  handleChange:
  {
    (e: ChangeEvent<unknown>)
    : void; <T = string | ChangeEvent<unknown>>
    (field: T): T extends ChangeEvent<unknown> ? void :
      (e: string | ChangeEvent<unknown>) => void;
  }
  type: string;
  placeholder: string;
  name: string;
};

export const InputField: React.FC<PropTypes> = ({
  error,
  touched,
  values,
  handleChange,
  type,
  placeholder,
  name,
}) => {
  return (
    <div className={styles.field}>
      <input
        className={styles.input}
        type={type}
        name={name}
        onChange={handleChange}
        value={values}
        placeholder={placeholder}
        autoComplete="off"
      />
      {error && (
        <p className={styles.error}>
          {error && touched && error}
        </p>
      )}
    </div>
  );
};
