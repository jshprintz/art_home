import React, { useState } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import SignupPage from "../SignupPage/SignupPage";
import LoginPage from "../LoginPage/LoginPage";
import StyleQuiz from "../StyleQuiz/StyleQuiz";
import userService from "../../utils/userService";
import Home from "../Home/Home";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const navigate = useNavigate();
  const [user, setUser] = useState(userService.getUser()); // getUser decodes our JWT token, into a javascript object
  // this object corresponds to the jwt payload which is defined in the server signup or login function that looks like
  // this  const token = createJWT(user); // where user was the document we created from mongo

  function handleSignUpOrLogin() {
    setUser(userService.getUser()); // getting the user from localstorage decoding the jwt
  }

  function handleLogout() {
    userService.logout();
    setUser(null);
    navigate("/");
  }

  if (user) {
    return (
        <Routes>
          <Route
            path="/"
            element={<Home loggedUser={user} handleLogout={handleLogout} />}
          />
          <Route
            path="/login"
            element={<LoginPage handleSignUpOrLogin={handleSignUpOrLogin} />}
          />
          <Route
            path="/signup"
            element={<SignupPage handleSignUpOrLogin={handleSignUpOrLogin} />}
          />
          <Route
            path="/quiz"
            element={<StyleQuiz loggedUser={user} handleLogout={handleLogout} />}
          />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
    );
  }

  return (
    <Routes>
      <Route
        path="/"
        element={<Home loggedUser={user} handleLogout={handleLogout} />}
      />
      <Route
        path="/login"
        element={<LoginPage handleSignUpOrLogin={handleSignUpOrLogin} />}
      />
      <Route
        path="/signup"
        element={<SignupPage handleSignUpOrLogin={handleSignUpOrLogin} />}
      />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
