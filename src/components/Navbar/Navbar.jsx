import { useState } from "react";
import { Link } from "react-router-dom";
import { ACTIONS } from "../../redux/actionTypes";
import store from "../../redux/store";
import Styles from "./Navbar.module.css";

const Navbar = ({ setToogleProjectNav, toogleProjectNav }) => {
  const toogleNav = () => {
    setToogleProjectNav(!toogleProjectNav);
  };
  return (
    <nav className={Styles.container}>
      <Link className={Styles.link} to='/'>
        Home
      </Link>
      <Link className={Styles.link} to='/tools'>
        Tools
      </Link>
      <Link onClick={toogleNav} className={Styles.link} to='/projectNav'>
        Projects
      </Link>
      <Link className={Styles.link} to='/contact'>
        Contact
      </Link>
    </nav>
  );
};

export default Navbar;
