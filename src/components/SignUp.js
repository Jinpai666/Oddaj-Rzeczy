import React, { useState } from "react";

import {Link} from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import DecoratedHeader from "./DecoratedHeader";


export default function Login(){
    // const[loginEmail, setLoginEmail] = useState("");
    // const[loginPassword, setLoginPassword] = useState("");
    // const changeEmailValue = (event) => {setLoginEmail(event.target.value)};
    // const changePasswordlValue = (event) => {setLoginPassword(event.target.value)};
//Firebase data
//     const[registerEmail, setRegisterEmail] = useState("");
//     const[registerPassword, setRegisterPassword] = useState("");
//     const[loginError, setLoginError] = useState('')
//     const register = async () =>{
//         try {
//             const user = await createUserWithEmailAndPassword(
//                 auth,
//                 registerEmail,
//                 registerPassword
//             );
//             console.log(user)
//         } catch (error){
//             console.log(error.message)
//             setLoginError(error)
//         }
//     }
//     const changeEmailValue = (event) => {setRegisterEmail(event.target.value)};
//     const changePasswordValue = (event) => {setRegisterPassword(event.target.value)};

//formik data collection
    const formik = useFormik({
        initialValues:{
            email: "",
            password:"",
            confirmPassword:""
        },
        //yup validation
        validationSchema: Yup.object({
            email: Yup.string()
                .email("Niepoprawny adres email")
                .required("Proszę podać adres email"),
            password: Yup.string()
                .min(6,"Hasło musi mieć przynajmniej 6 znaków")
                .required("Proszę podać hasło"),
            confirmPassword: Yup.string().oneOf(
                [Yup.ref("password")],
                "Hasła muszą się zgadzać"
            )
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
                    <div className="form__input-wrapper">
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
                    </div>
                    <div className="form__input-wrapper">
                        <label className="form__label" htmlFor="password">Hasło
                            <input
                                className="form__field"
                                type="password"
                                name="password"
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </label>
                        {formik.touched.password && formik.errors.password ? <p className="form__error">{formik.errors.password}</p> : null}
                    </div>
                    <div className="form__input-wrapper">
                        <label className="form__label" htmlFor="confirmPassword">Potwierdź hasło
                            <input
                                className="form__field"
                                type="password"
                                name="confirmPassword"
                                value={formik.values.confirmPassword}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </label>
                        {formik.touched.confirmPassword && formik.errors.confirmPassword ? <p className="form__error">{formik.errors.confirmPassword}</p> : <p className="form__error">{formik.errors.confirmPassword}</p>}
                    </div>
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