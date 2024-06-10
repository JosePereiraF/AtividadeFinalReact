import React from 'react';
import './style.css';


const Footer = () => {
    return (
        <>
            <main></main>
            <footer>
                <div id="footer_content">
                    <div id="footer_contacts">
                        <h1>Logo</h1>
                        <p>It's all about your dream.</p>
                        <div id="footer_social_media">
                            <a href="https://www.instagram.com/" className="footer_link" id="instagram">
                                <i className="fa-brands fa-instagram"></i>
                            </a>
                            <a href="https://facebook.com" className="footer_link" id="facebook">
                                <i className="fa-brands fa-facebook-f"></i>
                            </a>
                            <a href="https://web.whatsapp.com/" className="footer_link" id="whatsapp">
                                <i className="fa-brands fa-whatsapp"></i>
                            </a>
                        </div>
                    </div>
                    <ul className="footer-list">
                        <li>
                            <h3>Blog</h3>
                        </li>
                        <li>
                            <p  className="footer-link">tech</p>
                        </li>
                        <li>
                            <p  className="footer-link">Music</p>
                        </li>
                        <li>
                            <p  className="footer-link">Adventures</p>
                        </li>
                    </ul>
                    <ul className="footer-list">
                        <li>
                            <h3>Products</h3>
                        </li>
                        <li>
                            <p className="footer-link">App</p>
                        </li>
                        <li>
                            <p className="footer-link">Desktop</p>
                        </li>
                        <li>
                            <p className="footer-link">Sound</p>
                        </li>
                    </ul>
                    <div id="footer_subscribe">
                        <h3>Subscribe</h3>
                        <p>Enter your e-mail to get notified about our news solutions</p>
                        <div id="input_group">
                            <input type="email" id="email" />
                            <button>
                                <i className="fa-regular fa-envelope"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div id="footer_copyright">
                    &copy; 2024 todos os direitos reservados a KaKuNa PokeCompany
                </div>
            </footer>
        </>
    );
};

export default Footer;
