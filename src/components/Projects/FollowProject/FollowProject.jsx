import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Styles from "./FollowProject.module.css";

const FollowProject = () => {
  const token = false;
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, []);
  return <div>FollowProject</div>;
};

export default FollowProject;
