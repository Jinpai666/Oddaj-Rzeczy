import React, { useState} from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home"
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import ErrorPage from "./components/ErrorPage";
import "./scss/main.scss";
import Logout from "./components/Logout";
import {
    onAuthStateChanged,
} from "firebase/auth";
import {auth} from "./firebase";

function App() {
// Firebase data
    const[loginError, setLoginError] = useState("");
    //user management
    const[currentUser, setCurrentUser] = useState("");
    onAuthStateChanged(auth, (currentUser) => {
        setCurrentUser(currentUser);
    })

    return (
        <Router>
            <Header
                currentUser={currentUser}
                setLoginError={setLoginError}
            />
            <Routes>
                <Route
                    path="/"
                    element={
                    <Home
                        currentUser={currentUser}
                    />}
                />
                <Route
                    path="rejestracja"
                    element={
                    <SignUp
                        currentUser={currentUser}
                    />}
                />
                <Route
                    path="logowanie"
                    element={
                    <Login
                        currentUser={currentUser}
                        loginError={loginError}
                        setLoginError={setLoginError}
                    />}
                />
                <Route
                    path="*"
                    element={<ErrorPage/>}
                />
                <Route
                    path="wylogowano"
                    element={<Logout/>}
                />
            </Routes>
        </Router>
    );
}

export default App;
