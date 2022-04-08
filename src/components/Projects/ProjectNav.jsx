import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ACTIONS } from "../../redux/actionTypes";
import store from "../../redux/store";
import Styles from "./ProjectNav.module.css";

const ProjectNav = () => {
  const toogleProjectMenu = useSelector((state) => state.toogleProjectMenu);

  console.log(toogleProjectMenu, "UHKJHKGOJHGKJK");
  return (
    <div className={Styles.container}>
      <nav className={Styles.nav}>
        <Link className={Styles.link} to='/followProject'>
          Follow Your Project
        </Link>
        <Link className={Styles.link} to='/doneProjects'>
          Done Projects
        </Link>
      </nav>
    </div>
  );
};

export default ProjectNav;
