import React, {useState} from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import DecoratedHeader from "./DecoratedHeader";
const url= "https://fer-api.coderslab.pl/v1/portfolio/contact";

export default function Contact(){

    const [success, setSuccess] = useState(false);

//formik data collection
    const formik = useFormik({
        initialValues:{
            name: "",
            email: "",
            message:""
        },
        //yup validation
        validationSchema: Yup.object({
            name: Yup.string()
                .matches(/^[\p{L}]+$/u, "Imię powinno być jednym wyrazem bez znaków specjalnych")
                .required("Proszę podać imię"),
            email: Yup.string()
                .email("Niepoprawny adres email")
                .required("Proszę podać adres email"),
            message: Yup.string()
                .min(120,"Wiadomość musi mieć conajmniej 120 znaków")
                .required("Wiadomość musi mieć conajmniej 120 znaków"),

        }),
        //post on submit
        onSubmit: async (values) => {
            try{
                await axios.post(
                    url,
                    {
                        name: values.name,
                        email: values.email,
                        message: values.message
                    },
                    {
                        "Content-Type": "application/json"
                    }
                );
                formik.resetForm();
                setSuccess(true);
            } catch (error) {
                console.log(error);
                alert("Przepraszamy, coś poszło nie tak, spróbuj jeszcze raz");
            }
        },
    });

    return (
        <section id="contact" className="contact">
            <form  className="contact__form" onSubmit={formik.handleSubmit}>
                <DecoratedHeader styling="contact__header" text="Skontaktuj się z nami"/>
                {success && <p className="contact__info">
                    Wiadomość została wysłana!<br/>
                    Wkrótce się skontaktujemy.
                </p>}
                <div className="contact__first-row">
                    <div className="contact__input-wrapper">
                        <label className="contact__label" htmlFor="name">
                            Wpisz swoje imię
                            <input
                                className="contact__field"
                                type="text"
                                name="name"
                                placeholder="Krzystof"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.name}
                                style={formik.touched.name && formik.errors.name ? {borderColor:"red"} : null}
                            />
                        </label>
                        {formik.touched.name && formik.errors.name ? <p className="contact__error">{formik.errors.name}</p> : null}
                    </div>
                    <div className="contact__input-wrapper">
                        <label className="contact__label" htmlFor="email">
                            Wpisz swoje email
                            <input
                                className="contact__field"
                                type="text"
                                name="email"
                                placeholder={"abc@xyz.pl"}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                                style={formik.touched.email && formik.errors.email ? {borderColor:"red"} : null}
                            />
                        </label>
                        {formik.touched.email && formik.errors.email ? <p className="contact__error">{formik.errors.email}</p> : null}
                    </div>
                </div>
                <div className="contact__input-wrapper">
                    <label className="contact__label" htmlFor="message">Wpisz swoją wiadomość</label>
                    <textarea
                        className="contact__message"
                        name="message" rows="4"
                        placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.message}
                        style={formik.touched.message && formik.errors.message ? {borderColor:"red"} : null}
                    />
                    {formik.touched.message && formik.errors.message ? <p className="contact__error">{formik.errors.message}</p> : null}
                </div>
                <button className="contact__button" type="submit">Wyślij</button>
            </form>
        </section>

    )
}