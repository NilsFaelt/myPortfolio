import { useState } from "react";
import Helmet from "react-helmet";
import Styles from "./App.module.css";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className={Styles.app}>
      <Helmet>
        <title>Connected thru interface</title>
        <meta name='description' content='programing and front end developer' />
      </Helmet>
      <Header />
      <Navbar />
      <Routes>
        <Route path='/' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
