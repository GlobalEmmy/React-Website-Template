import Header from "../../components/Header";
import HeaderImage from "../../images/Image4.jpg";
import { MdEmail } from "react-icons/md";
import { BsMessenger } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import "./contact.css";

const Contact = () => {
  return (
    <>
      <Header title="Get In Touch" image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum natus
        asperiores, in sunt omnis atque minima quibusdam fugit. Omnis, labore.
      </Header>
      <section className="contact">
        <div className="container contact__container">
          <div className="container__wrapper">
            <a
              href="mailto:monyem44@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MdEmail />
            </a>
            <a
              href="http://m.me/monyem_emmanuel"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsMessenger />
            </a>
            <a href="http://wa.me/+2347037288781" target="_blank" rel="noopener noreferrer">
              <IoLogoWhatsapp />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
