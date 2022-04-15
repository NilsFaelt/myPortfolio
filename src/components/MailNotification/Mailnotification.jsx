import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { grabMailAdress } from "../../redux/Reducers/grabMailAdress";
import store from "../../redux/store";
import Styles from "./Mailnotification.module.css";

const Mailnotification = () => {
  const mail = useSelector((state) => state.grabMailAdress);
  store.getState();
  return (
    <Link className={Styles.link} to='/'>
      <div className={Styles.container}>
        <p className={Styles.thankYou}>Thank You</p>
        <p className={Styles.text}>
          We have recived your mail and will get back to you as soon as posilble
        </p>
        <p className={Styles.mail}> At: {mail}</p>
      </div>
    </Link>
  );
};

export default Mailnotification;
