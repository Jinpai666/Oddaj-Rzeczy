import React, {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import DecoratedHeader from "./DecoratedHeader";
import {signInWithEmailAndPassword} from "firebase/auth";
import {auth} from "../firebase";

export default function Login(props){
//firebase
    const[loginEmail, setLoginEmail] = useState("")
    const[loginPassword, setLoginPassword] = useState("")
    const login = async () => {
        try{
            await signInWithEmailAndPassword(
                auth,
                loginEmail,
                loginPassword
            )

        }catch (error){
            console.log(error.message)
            props.setLoginError(error.message)
        }
    }
//formik data collection
    const formik = useFormik({
        initialValues:{
            email: "",
            password:""
        },
        //yup validation
        validationSchema: Yup.object({
            email: Yup.string()
                .email("Niepoprawny adres email")
                .required("Proszę podać adres email"),
            password: Yup.string()
                .min(6,"Hasło musi mieć przynajmniej 6 znaków")
                .required("Proszę podać hasło"),
        }),
        //post on submit
        onSubmit: () => {
            login();
        },
    });
//navigate
    const navigate = useNavigate();
    useEffect(() =>{
        if(props.currentUser){
            navigate('/')
        }
    }, [navigate, props.currentUser]);

    return (
        <section className="form">
            <form className="form__container"  onSubmit={formik.handleSubmit}>
                <DecoratedHeader styling={"form__header"} text="Zaloguj się"/>
                {props.loginError && <p className="form__login-error">Zły email lub hasło</p>}
                <div className="form__inputs">
                    <div className="form__input-wrapper">
                        <label className="form__label" htmlFor="email">Email
                            <input
                                className="form__field"
                                type="text"
                                name="email"
                                onChange={event => {formik.handleChange(event);
                                    setLoginEmail(event.target.value);
                                }}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                                style={formik.touched.email && formik.errors.email ? {borderColor:"red"} : null}
                            />
                        </label>
                        {formik.touched.email && formik.errors.email ? <p className="form__error">{formik.errors.email}</p> : null}
                    </div>
                    <div className="form__input-wrapper">
                        <label className="form__label" htmlFor="password">Hasło
                            <input
                                className="form__field"
                                type="password"
                                name="password"
                                value={formik.values.password}
                                onChange={event => {                           formik.handleChange(event);
                                    setLoginPassword(event.target.value);
                                }}
                                onBlur={formik.handleBlur}
                                style={formik.touched.password && formik.errors.password ? {borderColor:"red"} : null}
                            />
                        </label>
                        {formik.touched.password && formik.errors.password ? <p className="form__error">{formik.errors.password}</p> : null}
                    </div>
                </div>
                <div className="form__buttons">
                    <Link   className="form__button" to="/rejestracja">Załóż konto</Link>
                    <button  type="submit" className="form__button">Zaloguj się</button>
                </div>
            </form>
        </section>
    )
}