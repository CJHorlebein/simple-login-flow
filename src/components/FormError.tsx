import { FC } from 'react';

import styles from './FormError.module.css';

interface FormErrorProps {
  error?: string;
  className?: string;
}
export const FormError: FC<FormErrorProps> = ({
  error = '',
  className = '',
}) => {
  const classes = className
    ? `${styles.formError} ${className}`
    : styles.formError;
  if (error) {
    return <div className={classes}>{error}</div>;
  }
  return null;
};
