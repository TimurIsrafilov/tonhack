import { Link } from "react-router-dom";

import styles from "./tokens.module.css";

import Button from "../../components/button/button";

import { MAIN } from "../../utils/constants";

function Tokens(): React.JSX.Element {
  return (
    <div className={styles.tokens}>
      <h1 className={styles.tokens__title}>Tokens</h1>
      <Link to={MAIN}>
        <Button title={"MAIN SCREEN"} />
      </Link>
    </div>
  );
}

export default Tokens;
