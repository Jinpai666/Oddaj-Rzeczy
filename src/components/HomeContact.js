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
        <section id="contact" className="contact">
            <form  className="contact__form" onSubmit={handleSubmit}>
                <DecoratedHeader styling="contact__header" text="Skontaktuj się z nami"/>
                <div className="contact__first-row">
                    <label className="contact__label" htmlFor="name">
                        Wpisz swoje imię
                        <input
                            className="contact__field"
                            type="text"
                            name="name"
                            onChange={handleNameChange}
                            placeholder="Krzystof"
                        />
                    </label>
                    <label className="contact__label" htmlFor="email">
                        Wpisz swoje email
                        <input
                            className="contact__field"
                            type="email"
                            name="email"
                            onChange={handleEmailChange}
                            placeholder={"abc@xyz.pl"}
                        />
                    </label>
                </div>
                <label className="contact__label" htmlFor="message">Wpisz swoją wiadomość</label>
                <textarea
                    className="contact__message"
                    onChange={handleMessageChange}
                    name="message" rows="4"
                    placeholder=
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                     sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                />
                <button className="contact__button" type="submit">Wyślij</button>
            </form>
        </section>
    )
}