import React, { useState } from "react";

import {Link} from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import DecoratedHeader from "./DecoratedHeader";
import axios from "axios";


export default function Login(){
    const[loginEmail, setLoginEmail] = useState("");
    const[loginPassword, setLoginPassword] = useState("");
    const changeEmailValue = (event) => {setLoginEmail(event.target.value)};
    const changePasswordlValue = (event) => {setLoginPassword(event.target.value)};
    //firebase data
    // const[loginError, setLoginError] = useState('')
    // const login = async () =>{
    //     try {
    //         const user = await signInWithEmailAndPassword(
    //             auth,
    //             loginEmail,
    //             loginPassword
    //         );
    //         console.log(user)
    //     } catch (error){
    //         console.log(error.message)
    //         setLoginError(error)
    //     }
    // }

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
            console.log('loguje')
        },
    });


    return (
        <section className="form">
            <form className="form__container"  onSubmit={formik.handleSubmit}>
                <DecoratedHeader styling={"form__header"} text="Zaloguj się"/>
                <div className="form__inputs">
                    <label className="form__label" htmlFor="email">Email
                        <input
                            className="form__field"
                            type="text"
                            name="email"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}

                        />
                    </label>
                    {formik.touched.email && formik.errors.email ? <p className="form__error">{formik.errors.email}</p> : null}
                    <label className="form__label" htmlFor="password">Hasło
                        <input
                            className="form__field"
                            type="password"
                            name="password"
                            value={formik.values.password}
                            onChange={event => {
                                formik.handleChange(event);
                                changePasswordlValue(event);
                            }
                            }
                            onBlur={formik.handleBlur}
                        />
                    </label>
                    {formik.touched.password && formik.errors.password ? <p className="form__error">{formik.errors.password}</p> : null}
                </div>
                <div className="form__buttons">
                    <Link className="form__button" to="/rejestracja">Załóż konto</Link>
                    <Link className="form__button" to="/">Zaloguj się</Link>
                </div>
                <button type="submit">submit</button>

            </form>
        </section>
    )
}