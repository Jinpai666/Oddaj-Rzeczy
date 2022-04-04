import React from "react";
import { FaFacebookSquare, FaInstagram } from 'react-icons/fa'

export default function HomeFooter(){
    return (
        <section className="footer">
            <div className="footer__item"></div>
            <p className="footer__text footer__item">Copyright by Coders Lab</p>
            <div className="footer__icons footer__item">
                <a href="https://www.facebook.com/" target="_blank"><FaFacebookSquare/></a>
                <a href="https://www.instagram.com/" target="_blank"><FaInstagram/></a>
            </div>
        </section>
    )
}