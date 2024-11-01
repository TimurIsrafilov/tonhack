import { Routes, Route } from "react-router-dom";

import styles from "./app.module.css";

import Main from "../../pages/main/main";
import Tokens from "../../pages/tokens/tokens";
import Projects from "../../pages/projects/projects";

import { MAIN, PROJECTS, TOKENS } from "../../utils/constants";

import {
  TonConnectButton,
  useTonAddress,
  useTonWallet,
} from "@tonconnect/ui-react";

function App(): React.JSX.Element {
  //@ts-ignore
  let tg = window.Telegram.WebApp;
  const userData = tg.initDataUnsafe.user;
  const viewportHeight = tg.viewportHeight;
  //@ts-ignore
  console.log("tg.viewportHeight:", tg.viewportHeight);
  console.log("initDataUnsafe:", userData);

  const userFriendlyAddress = useTonAddress();
  const rawAddress = useTonAddress(false);
  const wallet = useTonWallet();
  console.log("userFriendlyAddress:", userFriendlyAddress)
  console.log("rawAddress:", rawAddress)
  console.log("wallet:", wallet)

  return (
    <div className={styles.app}>
      <h1>TRACKER</h1>

      <TonConnectButton />
      {userFriendlyAddress && rawAddress && (
        <div>
          <p>User-friendly address: {userFriendlyAddress}</p>
          <p>Raw address: {rawAddress}</p>
        </div>
      )}
      {wallet && (
        <div>
          {/* <p>Connected wallet: {wallet.name}</p> */}
          <p>Device: {wallet.device.appName}</p>
        </div>
      )}

      <Main userData={userData} viewportHeight={viewportHeight} />

      {/* <Routes>
        <Route path={MAIN} element={<Main />} />
        <Route path={TOKENS} element={<Tokens />} />
        <Route path={PROJECTS} element={<Projects />} />
      </Routes> */}
    </div>
  );
}

export default App;
