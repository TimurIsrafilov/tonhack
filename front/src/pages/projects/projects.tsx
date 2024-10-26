import { Link } from "react-router-dom";
import styles from "./projects.module.css";
import Button from "../../components/button/button";
import { MAIN } from "../../utils/constants";

function Projects(): React.JSX.Element {
  return (
    <div className={styles.projects}>
      <h1 className={styles.projects__title}>Projects</h1>
      <Link to={MAIN}>
        <Button title={"MAIN SCREEN"} />
      </Link>
    </div>
  );
}

export default Projects;
