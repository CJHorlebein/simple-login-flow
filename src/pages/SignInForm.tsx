import { FC, useState } from 'react';
import { useUserDataContext } from '../store';
import { TextInput, FormError, Button } from '../components';

import styles from './SignInForm.module.css';

interface SignInFormProps {
  handleRedirectUser: () => void;
}
export const SignInForm: FC<SignInFormProps> = ({ handleRedirectUser }) => {
  const { signInUser } = useUserDataContext();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const handleSignIn = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const isSuccess = !!signInUser?.(email, password);
    if (isSuccess) {
      return handleRedirectUser();
    }
    setErrorMsg('Something went wrong, unable to login');
  };
  return (
    <form onSubmit={handleSignIn}>
      <div className={styles.inputContainer}>
        <TextInput
          label='email'
          name='email'
          type='email'
          placeholder='email'
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
        <FormError error={errorMsg} className={styles.formError} />
      </div>
      <Button content='Submit' className={styles.submitBtn} />
    </form>
  );
};
