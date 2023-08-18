import type { ChangeEvent, FC, FormEvent } from 'react';
import { signUserIn } from '../../../api/sessions';
import { useState } from 'react';

const SignInModal: FC = () => {
  const [creds, setCreds] = useState({ username: '', password: '' });

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void =>
    setCreds({ ...creds, [event.target.name]: event.target.value });

  const handleSubmit = (event: FormEvent): void => {
    event.preventDefault();
    signUserIn(creds)
      .then(() => console.log('Remember to close the modal'))
      .catch((error) => alert(error.message));
  };

  return (
    <div className="backdrop">
      <div>
        <h3>Sign In</h3>
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
