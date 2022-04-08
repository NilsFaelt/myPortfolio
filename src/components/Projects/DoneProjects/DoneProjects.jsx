import { useEffect } from "react";
import Styles from "./DoneProjects.module.css";

const DoneProjects = ({ setToogleProjectNav }) => {
  useEffect(() => {
    setToogleProjectNav(false);
  }, []);
  return <div>DoneProjects</div>;
};

export default DoneProjects;
