import { RenderTool } from "./RenderTool/RenderTool";
import Styles from "./Tools.module.css";

const Tools = () => {
  return (
    <div className={Styles.container}>
      <h2 className={Styles.title}>Tools</h2>
      <p className={Styles.text}>Tools i use and why</p>
      <div className={Styles.toolContainer}>
        <RenderTool />
      </div>
    </div>
  );
};

export default Tools;
