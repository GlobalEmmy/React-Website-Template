import { Link } from "react-router-dom";
import Logo from "../images/onuawa-hub-logo2.png";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div className="container footer__container">
        <article>
          <Link to="/" className="logo">
            <img src={Logo} alt="Footer Logo" />
          </Link>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            labore dolorum atque.
          </p>
          <div className="footer__socials">
            <Link
              to="https://linkkedin.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FaLinkedin />
            </Link>
            <Link
              to="https://linkkedin.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FaFacebookF />
            </Link>
            <Link
              to="https://linkkedin.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <AiOutlineTwitter />
            </Link>
            <Link
              to="https://linkkedin.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <AiOutlineInstagram />
            </Link>
          </div>
        </article>
        <article>
          <h4>Permalinks</h4>
          <Link to="/about">About</Link>
          <Link to="/plans">Plans</Link>
          <Link to="/trainers">Trainers</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/contact">Contact</Link>
        </article>
        <article>
          <h4>Insights</h4>
          <Link to="/s">Blog</Link>
          <Link to="/s">Case Studies</Link>
          <Link to="/s">Events</Link>
          <Link to="/s">Communities</Link>
          <Link to="/s">FAQs</Link>
        </article>
        <article>
          <h4>Get In Touch</h4>
          <Link to="/contact">Contact Us</Link>
          <Link to="/Support">Plans</Link>
        </article>
      </div>
      <div className="footer__copyright">
          <small>2023 MONYEM EMMANUEL &copy; All Rights Reserved </small>
      </div>
    </footer>
  );
};

export default Footer;
