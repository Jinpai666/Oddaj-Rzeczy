import React from "react";
import {Link, useNavigate} from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import DecoratedHeader from "./DecoratedHeader";


export default function Login(){
    // const formik = useFormik();

    return (
        <section className="login">
            <div className="login__container">
                <DecoratedHeader styling={"login__header"} text="Zaloguj się"/>
                <div className="login__inputs">
                    <label className="login__label" htmlFor="email">Email
                        <input
                            className="login__field"
                            type="text"
                            name="email"
                        />
                    </label>
                    <label className="login__label" htmlFor="password">Hasło
                        <input
                            className="login__field"
                            type="password"
                            name="password"
                        />
                    </label>
                </div>
                <div className="login__buttons">
                    <Link className="login__button" to="/rejestracja">Załóż konto</Link>
                    <Link className="login__button" to="/">Zaloguj się</Link>
                </div>
            </div>
        </section>
    )
}