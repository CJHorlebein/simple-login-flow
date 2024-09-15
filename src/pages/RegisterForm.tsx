import { FC, useEffect, useState } from 'react';
import { useUserDataContext } from '../store';
import { TextInput, FormError, Button } from '../components';

import styles from './RegisterForm.module.css';

interface RegisterFormProps {
  handleRedirectUser: () => void;
}
export const RegisterForm: FC<RegisterFormProps> = ({ handleRedirectUser }) => {
  const { registerUser } = useUserDataContext();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (password !== confirmPass && confirmPass !== '') {
      setErrorMsg('Passwords must match!');
    }
    if (password === confirmPass) {
      setErrorMsg('');
    }
  }, [confirmPass, password]);

  const handleSetConfirmPass = (updatedConfirmPass: string) => {
    if (!updatedConfirmPass) {
      setErrorMsg('');
    }
    setConfirmPass(updatedConfirmPass);
  };

  const handleRegisterUser = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const isSuccess = !!registerUser?.(email, password);
    if (isSuccess) {
      return handleRedirectUser();
    }
    setErrorMsg('Something went wrong with Registering');
  };
  return (
    <form onSubmit={handleRegisterUser}>
      <div className={styles.inputContainer}>
        <TextInput
          label='email'
          name='email'
          type='email'
          placeholder='great@frontend.com'
          value={email}
          onChange={setEmail}
        />
        <TextInput
          label='password'
          name='password'
          type='password'
          placeholder='password'
          value={password}
          onChange={setPassword}
        />
        <TextInput
          label='confirm password'
          name='confirm-password'
          type='password'
          placeholder='confirm password'
          value={confirmPass}
          onChange={handleSetConfirmPass}
        />
        <FormError error={errorMsg} className={styles.formError} />
      </div>
      <Button content='Submit' className={styles.submitBtn} />
    </form>
  );
};
