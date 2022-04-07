import Styles from "./HamburgerMenu.module.css";

const HamburgerMenu = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.bars}></div>
      <div className={Styles.bars}></div>
      <div className={Styles.bars}></div>
    </div>
  );
};

export default HamburgerMenu;
