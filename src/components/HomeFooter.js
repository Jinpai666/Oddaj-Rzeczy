import React from "react";
import { FaFacebookSquare, FaInstagram } from 'react-icons/fa'

export default function HomeFooter(){
    return (
        <section className="footer">
            <p className="footer__text footer__item">Copyright by Coders Lab</p>
            <div className="footer__icons footer__item">
                <a href="https://www.facebook.com/" target="_blank"><FaFacebookSquare className="footer__icon"/></a>
                <a  href="https://www.instagram.com/" target="_blank"><FaInstagram className="footer__icon"/></a>
            </div>
        </section>
    )
}