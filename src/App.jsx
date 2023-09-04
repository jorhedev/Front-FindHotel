
import './App.css'
import { useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './views/Home/Home'
import Results from './views/Results/Results'
// import FormCreate from './views/FormCreate/FormCreate'
import Footer from './components/Footer/Footer'
import DetailHotel from './views/Detail/Detail'
import Reserv from './views/Reserv/Reserv'
import ProtectedRoutes from './components/ProtectedRoutes/ProtectedRoutes'
import Hotel from './views/Hotel/Hotel'
import UserDashboard from './components/UserDashboard/DashboardUser'
import PostPago from "./components/PostPago/PostPago";
import classnames from "classnames";
import { FaSun, FaRegMoon } from "react-icons/fa";


function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const location = useLocation();
  const { pathname } = location;

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    setIsClicked(true);

    setTimeout(() => {
      setIsClicked(false);
    }, 500);
  };

  return (
    <div className={classnames("app", { "dark-mode": isDarkMode })}>
      <NavBar />

      <div className={`swi ${isDarkMode ? "dark" : "light"}`}>
        <p
          className={`mode ${isDarkMode ? "dark-mode" : "light-mode"}`}
          onClick={toggleDarkMode}
        >
          <FaSun className="sun-icon" />
          <FaRegMoon className="moon-icon" />
        </p>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/results" element={<Results />} />
        <Route path="/form" element={<FormCreate />} />
        <Route path="/detail/:hotelId" element={<DetailHotel />} />
        <Route path="/hotel" element={
          <ProtectedRoutes>
            <Hotel />
          </ProtectedRoutes>
        } />        
        <Route path="/reserva" element={<Reserv />} />
        <Route path="/postPago" element={<PostPago />} />
        <Route path='/user' element={<UserDashboard/>}/>


      </Routes>

      {!/(\/hotel)$/.test(pathname) ? <Footer /> : null}
    </div>
  );
}

export default App;
