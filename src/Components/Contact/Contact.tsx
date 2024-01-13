import { useRef } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faDiscord,
  faGithub,
  faLinkedin,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export function Contact() {
  const form = useRef<HTMLFormElement | null>(null);
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_ag34jzf",
          "template_kxpsv1i",
          form.current,
          "hjB7qzADdGkswO7p0"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    } else {
      console.error("Form reference is undefined");
    }
  };

  return (
    <section className="section-contact" id="contact">
      <header>
        <h2>Contact</h2>
      </header>
      <form ref={form} onSubmit={sendEmail} className="form-container">
        <input type="text" name="user_name" placeholder="Name" required />
        <input type="email" name="user_email" placeholder="Email" required />
        <textarea name="message" placeholder="Message" required />
        <input type="submit" value="Send" />
      </form>
      <footer className="container-footer">
        <ul className="social-icons">
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faDiscord} />
              {/* <FontAwesomeIcon icon={faSquareInstagram} /> */}
            </a>
          </li>
        </ul>
        <div className="contact-info">
          <ul>
            <li>
              <FontAwesomeIcon icon={faPhone} />
              <span>+51 967632230</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faEnvelope} />{" "}
              <span>jesuswe02@gmail.com</span>
            </li>
          </ul>
        </div>
        <p>Copyright © 2024 | All Rights Reserved</p>
      </footer>
    </section>
  );
}
