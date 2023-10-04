import type { ChangeEvent, FC, FormEvent } from 'react';
import { signUserIn } from '../../../api/sessions';
import styles from './SignInModal.module.scss';
import { useState } from 'react';

interface SignInModalPropTypes {
  close: () => void;
}

const SignInModal: FC<SignInModalPropTypes> = ({ close }) => {
  const [creds, setCreds] = useState({ username: '', password: '' });

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void =>
    setCreds({ ...creds, [event.target.name]: event.target.value });

  const handleSubmit = (event: FormEvent): void => {
    event.preventDefault();
    signUserIn(creds)
      .then(() => close())
      .catch((error) => alert(error.message));
  };

  return (
    <div className="backdrop">
      <div className={styles.container}>
        <h3>Authorize</h3>
        <p>Please, let us verify you are part of the Borluv Developments staff.</p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">
            Username:
            <input type="text" name="username" value={creds.username} onChange={handleChange} placeholder="Username" />
          </label>
          <label htmlFor="password">
            Password:
            <input type="password" name="password" value={creds.password} onChange={handleChange} />
          </label>
          <button type="submit">Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default SignInModal;
