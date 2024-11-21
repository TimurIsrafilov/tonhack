import { Routes, Route } from "react-router-dom";

import styles from "./app.module.css";

import Main from "../../pages/main/main";
import Tokens from "../../pages/tokens/tokens";
import Projects from "../../pages/projects/projects";

import { MAIN, PROJECTS, TOKENS } from "../../utils/constants";

import {
  SendTransactionRequest,
  TonConnectButton,
  useTonAddress,
  useTonWallet,
} from "@tonconnect/ui-react";

import { useTonConnectUI } from "@tonconnect/ui-react";

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
  console.log("userFriendlyAddress:", userFriendlyAddress);
  console.log("rawAddress:", rawAddress);
  console.log("wallet:", wallet);

  const colorScheme = tg.colorScheme;
  console.log("colorScheme:", colorScheme);
  const themeParams = tg.themeParams;
  console.log("themeParams:", themeParams);

  const userColorSchemeWhite =
    colorScheme === "dark" && userData
      ? { color: "var(--white)" }
      : { color: "var(--black)" };

  const transaction: SendTransactionRequest = {
    validUntil: Date.now() + 5 * 60 * 1000, // 5 minutes
    messages: [
      {
        address: "UQCmHU39chg1_j_r9CAjG9wg0-G3o2W9OztdVS-EiXWHFMz-", // message destination in user-friendly format
        amount: "1", // Toncoin in nanotons
      },
    ],
  };

  const [tonConnectUI, setOptions] = useTonConnectUI();

  return (
    <div
      className={`${styles.app} ${
        colorScheme === "light" ? styles.white : styles.black
      }`}
    >
      <h1>TRACKER</h1>

      <TonConnectButton />

      <div>
        <button onClick={() => tonConnectUI.sendTransaction(transaction)}>
          Send transaction
        </button>
      </div>

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

      {/* <Main userData={userData} viewportHeight={viewportHeight} /> */}

      {/* <Routes>
        <Route path={MAIN} element={<Main />} />
        <Route path={TOKENS} element={<Tokens />} />
        <Route path={PROJECTS} element={<Projects />} />
      </Routes> */}

      <h1 className={styles.main__title}>My Startup</h1>
      <p
        className={styles.main__user}
        style={userColorSchemeWhite}
      >{`first_name: ${userData?.first_name}`}</p>
      <p
        className={styles.main__user}
        style={userColorSchemeWhite}
      >{`last_name: ${userData?.last_name}`}</p>
      <p
        className={styles.main__user}
        style={userColorSchemeWhite}
      >{`username: ${userData?.username}`}</p>
      <p
        className={styles.main__user}
        style={userColorSchemeWhite}
      >{`language_code: ${userData?.language_code}`}</p>
      <p
        className={styles.main__user}
        style={userColorSchemeWhite}
      >{`id: ${userData?.id}`}</p>
      <p
        className={styles.main__user}
        style={userColorSchemeWhite}
      >{`viewportHeight: ${viewportHeight}`}</p>
      <p
        className={styles.main__user}
        style={userColorSchemeWhite}
      >{`colorScheme: ${colorScheme}`}</p>
      <p
        className={styles.main__user}
        style={userColorSchemeWhite}
      >{`colorScheme: ${themeParams}`}</p>
    </div>
  );
}

export default App;
