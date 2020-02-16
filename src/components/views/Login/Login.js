import React from 'react';
import styles from './Login.module.scss';
import Button from '@material-ui/core/Button';


const Login = () => (
  <div className={styles.component}>
    <div>
      <span className={styles.login}>Login</span>
      <input type='text'></input>
    </div>
    <div>
      <span className={styles.password}>Password</span>
      <input type='password'></input>
    </div>
    <Button>Login</Button>
  </div>
);

export default Login;
