import React, {useState} from "react";
import DecoratedHeader from "./DecoratedHeader";


export default function HomeContact(){
//data collection
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name);
        console.log(email);
        console.log(message);
    }
    const handleNameChange = (e) => {
        setName(e.target.value);
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }
    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    }
//formik
    return (
        <div className="contact">
            <form id="contact" className="contact__form" onSubmit={handleSubmit}>
                <DecoratedHeader styling="contact__header" text="Skontaktuj się z nami"/>
                <div className="contact__first-row">
                    <label
                        className="contact__label"
                        htmlFor="name"
                    >
                        "Wpisz swoje imię"
                    </label>
                    <input
                        className="contact__field"
                        type="text"
                        name="name"
                        onChange={handleNameChange}

                    />

                    <label
                        className="contact__label"
                        htmlFor="email"
                    >
                        "Wpisz swoje imię"
                    </label>
                    <input
                        className="contact__field"
                        type="email"
                        name="email"
                        onChange={handleEmailChange}
                    />
                </div>
                <label htmlFor="message">"Wpisz swoją wiadomość"</label>
                <textarea
                    className="contact__message"
                    onChange={handleMessageChange}
                    name="message" rows="4"
                />
                <button className="contact__button" type="submit">Wyślij</button>
            </form>
            <div className="contact__footer">Copyright by Coders Lab</div>
        </div>
    )
}