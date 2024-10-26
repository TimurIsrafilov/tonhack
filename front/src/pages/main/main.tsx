import { Link } from "react-router-dom";

import styles from "./main.module.css";

import Button from "../../components/button/button";
import List from "../../components/list/list";

import { MAIN, PROJECTS, TOKENS } from "../../utils/constants";
//@ts-ignore
function Main({ userData }): React.JSX.Element {
  // const userData = {
  //   name: "John",
  //   surname: "Silver",
  // };

  const usrerInfo = [
    { title: "role", content: "Founder" },
    { title: "startup", content: "Hispaniola" },
    { title: "balance", content: "500 STT" },
  ];

  const projectsInfo = [
    { title: "active projects", content: "2" },
    { title: "tasks to start", content: "1" },
    { title: "tasks in progress", content: "2" },
    { title: "tasks to approve", content: "1" },
  ];

  return (
    <div className={styles.main}>
      <h1 className={styles.main__title}>My Startup</h1>
      <p
        className={styles.main__user}
      >{`first_name: ${userData.first_name}`}</p>
      <p
        className={styles.main__user}
      >{`last_name: ${userData.last_name}`}</p>
      <p
        className={styles.main__user}
      >{`username: ${userData.username}`}</p>
      <p
        className={styles.main__user}
      >{`language_code: ${userData.language_code}`}</p>
            <p
        className={styles.main__user}
      >{`id: ${userData.id}`}</p>
      <List info={usrerInfo} />
      <Link to={TOKENS}>
        <Button title={"MY <STARTUP> TOKENS"} />
      </Link>
      <List info={projectsInfo} />
      <Link to={PROJECTS}>
        <Button title={"PROJECTS"} />
      </Link>
      <Link to={MAIN}>
        <Button title={"MAIN SCREEN"} />
      </Link>
    </div>
  );
}

export default Main;
