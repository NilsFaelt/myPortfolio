import Styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.titleContainer}>
        <h1 className={Styles.title}>Connected Thru Interface</h1>
      </div>
    </div>
  );
};

export default Header;
