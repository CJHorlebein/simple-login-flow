import { FC } from 'react';

import styles from './Button.module.css';

interface ButtonProps {
  type?: 'submit' | 'button';
  content: string;
  onClick?: () => void;
  className?: string;
}
export const Button: FC<ButtonProps> = ({
  type = 'submit',
  content,
  onClick,
  className = '',
}) => {
  const classes = className
    ? `${styles.btnContainer} ${className}`
    : styles.btnContainer;
  return (
    <button className={classes} type={type} onClick={onClick}>
      {content}
    </button>
  );
};
