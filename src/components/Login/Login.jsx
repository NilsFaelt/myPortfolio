import { useState } from "react";
import Styles from "./Login.module.css";

const Login = () => {
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState({ name: null, password: null });

  const onSubmit = (e) => {
    e.preventDefault();
    setUser({ username: username, password: password });
    setusername("");
    setPassword("");
  };

  return (
    <form className={Styles.container}>
      <h2 className={Styles.title}>Login</h2>
      <label className={Styles.label} htmlFor=''>
        Username:
      </label>
      <input
        onChange={(e) => setusername(e.target.value)}
        className={Styles.input}
        type='text'
        value={username}
      />
      <label className={Styles.label} htmlFor=''>
        Password:
      </label>
      <input
        onChange={(e) => setPassword(e.target.value)}
        className={Styles.input}
        type='password'
        value={password}
      />
      <button onClick={onSubmit} className={Styles.btn}>
        Login
      </button>
    </form>
  );
};

export default Login;
