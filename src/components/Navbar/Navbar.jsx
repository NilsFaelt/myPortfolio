import { Link } from "react-router-dom";
import Styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={Styles.container}>
      <Link className={Styles.link} to='/'>
        Home
      </Link>
      <Link className={Styles.link} to='/'>
        Tools
      </Link>
      <Link className={Styles.link} to='/'>
        Projects
      </Link>
      <Link className={Styles.link} to='/'>
        Contact
      </Link>
      <Link className={Styles.link} to='/followProject'>
        Follow your project
      </Link>
    </nav>
  );
};

export default Navbar;
