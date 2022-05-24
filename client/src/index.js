import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Components/HomePage";
import AddProperty from "./Pages/AddProperty";
import Allproperties from "./Components/Allproperties";
import About from "./Components/About";
import Help from "./Components/Help";
import ErrorPage from "./Components/ErrorPage";
import NewProperty from "./Components/NewProperty";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import FinalDashboard from "./Components/FinalDashboard";
import Property from "./Pages/Property";
import User from "./Pages/UserProfile/user.js";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/userProfile" element={<User />} />
        <Route path="/single/:id" element={<Property />} />
        {/* <Route path="/dashboard/MyProperty" element={<AddProperty />} /> */}
        <Route path="/dashboard" element={<FinalDashboard />} />
        <Route path="/home" element={<App />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/new" element={<NewProperty />} />
        <Route path="/property" element={<Allproperties />} />
        <Route path="/about" element={<About />} />
        <Route path="/help" element={<Help />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
