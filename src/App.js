import React from "react";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home"
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import ErrorPage from "./components/ErrorPage";
import "./scss/main.scss";

function App() {
    return (
        <Router>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="rejestracja" element={<SignUp/>} />
                <Route path="logowanie" element={<Login/>} />
                <Route path="*" element={<ErrorPage/>} />
            </Routes>
        </Router>
    );
}

export default App;
