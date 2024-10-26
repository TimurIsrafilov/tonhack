import { Routes, Route } from "react-router-dom";

import styles from "./app.module.css";

import Main from "../../pages/main/main";
import Tokens from "../../pages/tokens/tokens";
import Projects from "../../pages/projects/projects";

import { MAIN, PROJECTS, TOKENS } from "../../utils/constants";

function App(): React.JSX.Element {
  //@ts-ignore  
  let tg = window.Telegram.WebApp
  const userData = tg.initDataUnsafe.user
  console.log("initDataUnsafe:", userData)


  return (
    <div className={styles.app}>
      <h1>TRACKER</h1>
      <Main userData={userData}/>

      {/* <Routes>
        <Route path={MAIN} element={<Main />} />
        <Route path={TOKENS} element={<Tokens />} />
        <Route path={PROJECTS} element={<Projects />} />
      </Routes> */}
    </div>
  );
}

export default App;
