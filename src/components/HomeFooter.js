import React from "react";
import { FaFacebookSquare, FaInstagram } from 'react-icons/fa'


export default function HomeFooter(){
    return (
        <section className="footer">
            <h3 className="footer__header">Copyright by Coders Lab</h3>
            <div className="footer__icons">
                <a href="https://www.facebook.com/" target="_blank"><FaFacebookSquare/></a>
                <a href="https://www.instagram.com/" target="_blank"><FaInstagram/></a>
            </div>
        </section>
    )
}