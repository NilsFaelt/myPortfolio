import { useState } from "react";
import Helmet from "react-helmet";
import Styles from "./App.module.css";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import FollowProject from "./components/FollowProject/FollowProject";
import Login from "./components/Login/Login";

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
        <Route path='/followProject' element={<FollowProject />} />
        <Route path='/login' element={<Login />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
