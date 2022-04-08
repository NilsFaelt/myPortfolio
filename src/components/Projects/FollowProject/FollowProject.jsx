import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Styles from "./FollowProject.module.css";

const FollowProject = ({ setToogleProjectNav }) => {
  const token = false;
  const navigate = useNavigate();

  useEffect(() => {
    setToogleProjectNav(false);
    if (!token) {
      navigate("/login");
    }
  }, []);
  return <div>FollowProject</div>;
};

export default FollowProject;
