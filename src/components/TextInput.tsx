import { FC } from 'react';
import styles from './TextInput.module.css';
import { FormError } from './FormError';

interface TextInputProps {
  type: 'email' | 'password' | 'text';
  name: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  placeholder?: string;
}

export const TextInput: FC<TextInputProps> = ({
  label,
  name,
  type,
  error,
  placeholder = '',
  onChange,
  value,
}) => {
  const inputID = `${name}-${type}`;
  return (
    <div>
      <div className={styles.inputWrapper}>
        <label htmlFor={inputID} className={styles.inputLabel}>
          {label}
        </label>
        <input
          id={inputID}
          type={type}
          name={label}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
      <FormError error={error} />
    </div>
  );
};
