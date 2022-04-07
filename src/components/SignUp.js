import React, {useEffect} from "react";
import {Link, useNavigate} from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import DecoratedHeader from "./DecoratedHeader";

export default function Login(props){
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
            confirmPassword: Yup.string()
                .oneOf(
                    [Yup.ref("password")],
                    "Hasła muszą się zgadzać"
                )
                .required("Proszę potwierdź hasło"),
        }),
        //post on submit
        onSubmit: () => {
            console.log('rejestruje');
            props.register();
        },
    });
//navigate
    const navigate = useNavigate();
    useEffect(() =>{
        if(props.currentUser){
            navigate('/')
        }
    }, [props.currentUser]);
    return (
        <section className="form">
            <form className="form__container"  onSubmit={formik.handleSubmit}>
                <DecoratedHeader styling={"form__header"} text="Zarejestruj się"/>
                <div className="form__inputs">
                    <div className="form__input-wrapper">
                        <label className="form__label" htmlFor="email">Email
                            <input
                                className="form__field"
                                type="text"
                                name="email"
                                onChange={event => {                           formik.handleChange(event);
                                    props.setRegisterEmail(event.target.value);
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
                                onChange={event => {formik.handleChange(event);
                                    props.setRegisterPassword(event.target.value);
                                }}
                                onBlur={formik.handleBlur}
                                style={formik.touched.password && formik.errors.password ? {borderColor:"red"} : null}
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
                                style={formik.touched.confirmPassword && formik.errors.confirmPassword ? {borderColor:"red"} : null}
                            />
                        </label>
                        {formik.touched.confirmPassword && formik.errors.confirmPassword ? <p className="form__error">{formik.errors.confirmPassword}</p> : <p className="form__error">{formik.errors.confirmPassword}</p>}
                    </div>
                </div>
                <div className="form__buttons">
                    <button type="submit" className="form__button">Załóż konto</button>
                    <Link className="form__button" to="/logowanie">Zaloguj się</Link>
                </div>


            </form>



        </section>
    )
}