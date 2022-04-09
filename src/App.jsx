import { useEffect, useState } from "react";
import Helmet from "react-helmet";
import Styles from "./App.module.css";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import FollowProject from "./components/Projects/FollowProject/FollowProject";
import DoneProjects from "./components/Projects/DoneProjects/DoneProjects";
import ProjectNav from "./components/Projects/ProjectNav";
import { useSelector } from "react-redux";
import store from "./redux/store";

function App() {
  const [toogleProjectNav, setToogleProjectNav] = useState(false);
  return (
    <div className={Styles.app}>
      <Helmet>
        <title>Connected thru interface</title>
        <meta name='description' content='programing and front end developer' />
      </Helmet>
      <Header />
      <Navbar
        setToogleProjectNav={setToogleProjectNav}
        toogleProjectNav={toogleProjectNav}
      />
      <Routes>
        <Route path='/contact' element={<Contact />} />
        {toogleProjectNav ? (
          <Route path='/projectNav' element={<ProjectNav />} />
        ) : null}
        <Route
          path='/followProject'
          element={<FollowProject setToogleProjectNav={setToogleProjectNav} />}
        />
        <Route
          path='/doneProjects'
          element={<DoneProjects setToogleProjectNav={setToogleProjectNav} />}
        />
        <Route path='/login' element={<Login />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
