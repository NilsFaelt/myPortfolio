import { Link } from "react-router-dom";
import Styles from "./ProjectNav.module.css";

const ProjectNav = () => {
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
