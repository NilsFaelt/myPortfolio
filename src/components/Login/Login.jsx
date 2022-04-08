import Styles from "./Login.module.css";

const Login = () => {
  return (
    <form className={Styles.container}>
      <h2 className={Styles.title}>Login</h2>
      <label className={Styles.label} htmlFor=''>
        Username:
      </label>
      <input className={Styles.input} type='text' />
      <label className={Styles.label} htmlFor=''>
        Password:
      </label>
      <input className={Styles.input} type='password' />
      <button className={Styles.btn}>Login</button>
    </form>
  );
};

export default Login;
