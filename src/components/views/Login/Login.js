import React from 'react';
import styles from './Login.module.scss';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


const Login = () => (
  <div className={styles.component}>
    <div>
      <TextField
        id="login"
        label="Login"
        type="text"
        defaultValue= {''}
      />
    </div>
    <div>
      <TextField
        id="password"
        label="Password"
        type="password"
        defaultValue= {''}
      />
    </div>
    <Button>Login</Button>
  </div>
);

export default Login;
