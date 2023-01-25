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
import Logout from './Logout';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <NavBar/> */}
        <Routes>
        <Route path ="/" element={<Home/>}/>
          <Route path="/news" element={<News/>} />
          <Route path ="/description" element={<Description/>}/>
          <Route path="/*" element={<Navigate to="/" />} />
          <Route path="/historychart" element={<HistoryChart/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/forgotpassword" element={<ForgotPassword/>}/>
          <Route path="/changepassword" element={<ChangePassword/>}/>
          <Route path="/logout" element={<Logout/>}/>

          <Route path ="/about" element={<About/>}/>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
