import React, {useState} from "react";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home"
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import ErrorPage from "./components/ErrorPage";
import "./scss/main.scss";
import Logout from "./components/Logout";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut
} from "firebase/auth";
import {auth} from "./firebase";

function App() {
// Firebase data
    const[registerEmail, setRegisterEmail] = useState("");
    const[registerPassword, setRegisterPassword] = useState("");
    const[loginEmail, setLoginEmail] = useState("")
    const[loginPassword, setLoginPassword] = useState("")
    const[loginError, setLoginError] = useState("");
    //user management
    const[currentUser, setCurrentUser] = useState("");
    onAuthStateChanged(auth, (currentUser) => {
        setCurrentUser(currentUser);
    })
    const register = async () =>{
        try{
            const user = await createUserWithEmailAndPassword(
                auth,
                registerEmail,
                registerPassword
            )
            console.log('zarejestrowano');

        }catch (error){
            console.log(error.message)
        }
    };
    const login = async () => {
        try{
            const user = await signInWithEmailAndPassword(
                auth,
                loginEmail,
                loginPassword
            )
            console.log('zalogowano');

        }catch (error){
            console.log(error.message)
            setLoginError(error.message)
        }
    }
    const logout = async () => {
        await signOut(auth);
        console.log('wylogowano');
    }
    // const changeEmailValue = (event) => {setRegisterEmail(event.target.value);};
    // const changePasswordValue = (event) => {setRegisterPassword(event.target.value)};


    return (
        <Router>
            <Header
                currentUser={currentUser}
                logout={logout}
            />
            <Routes>
                <Route path="/" element={<Home
                    currentUser={currentUser}
                />} />
                <Route path="rejestracja" element={<SignUp
                    register={register}
                    setRegisterEmail={setRegisterEmail}
                    setRegisterPassword={setRegisterPassword}
                    currentUser={currentUser}

                />} />
                <Route path="logowanie" element={<Login
                    register={register}
                    setLoginEmail={setLoginEmail}
                    setLoginPassword={setLoginPassword}
                    currentUser={currentUser}
                    login={login}
                    loginError={loginError}
                />} />
                <Route path="*" element={<ErrorPage/>} />
                <Route path="wylogowano" element={<Logout/>} />
            </Routes>
        </Router>
    );
}

export default App;
