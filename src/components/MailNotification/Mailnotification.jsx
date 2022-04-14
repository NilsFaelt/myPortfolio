import { Link } from "react-router-dom";
import Styles from "./Mailnotification.module.css";

const Mailnotification = () => {
  return (
    <Link className={Styles.link} to='/'>
      <div className={Styles.container}>
        <p className={Styles.thankYou}>Thank You</p>
        <p className={Styles.text}>
          We have recived your mail and will get back to you as soon as posilble
        </p>
        <p>{}</p>
      </div>
    </Link>
  );
};

export default Mailnotification;
