import { useState } from "react";
import Helmet from "react-helmet";
import Styles from "./App.module.css";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className={Styles.app}>
      <Helmet>
        <title>Connected thru interface</title>
        <meta name='description' content='programing and front end developer' />
      </Helmet>
      <Router>
        <Header />
      </Router>
    </div>
  );
}

export default App;
