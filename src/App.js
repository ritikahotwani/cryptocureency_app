import logo from './logo.svg';
import './App.css';
import {app} from "./FirebaseConfig";
import News from './News';
import Description from './Description';
import NavBar from './NavBar';
import Home from "./Home";
import About from "./About";
import Login from './Login';
import Signup from "./Signup";
import HistoryChart from './HistoryChart';
import ChangePassword from './ChangePassword';
import ForgotPassword from "./ForgotPassword.js"
import Enquiry from "./Enquiry";
import Darkmode from 'darkmode-js';

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
function App() {



  const options = {
    bottom: '64px', // default: '32px'
    right: 'unset', // default: '32px'
    left: '32px', // default: 'unset'
    time: '0.5s', // default: '0.3s'
    mixColor: '#fff', // default: '#fff'
    backgroundColor: '#fff',  // default: '#fff'
    buttonColorDark: '#100f2c',  // default: '#100f2c'
    buttonColorLight: '#fff', // default: '#fff'
    saveInCookies: true, // default: true,
    label: '🌓', // default: ''
    autoMatchOsTheme: true // default: true
  }
  
  const darkmode = new Darkmode(options);
  darkmode.showWidget();





  return (
    <div className="App">
      <BrowserRouter>
        <NavBar
         
        />
        <Routes>
        <Route path ="/" element={<Login/>}/>
          <Route path="/news" element={<News/>} />
          <Route path ="/description" element={<Description/>}/>
          <Route path="/*" element={<Navigate to="/" />} />
          <Route path="/historychart" element={<HistoryChart/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/forgotpassword" element={<ForgotPassword/>}/>
          <Route path="/changepassword" element={<ChangePassword/>}/>
          <Route path="/enquiry" element={<Enquiry/>}/>
          <Route path ="/about" element={<About/>}/>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
