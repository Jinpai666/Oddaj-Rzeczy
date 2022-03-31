import "./scss/main.scss";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home"
import Header from "./components/Header";
import React from "react";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import ErrorPage from "./components/ErrorPage";

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
