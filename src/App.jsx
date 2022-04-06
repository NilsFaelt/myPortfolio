import { useState } from "react";
import Styles from "./App.module.css";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className={Styles.app}>
      <Header />
    </div>
  );
}

export default App;
