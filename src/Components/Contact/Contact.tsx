import { useRef } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";

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
    <section className="section-contact">
      <header>
        <h2>Contact</h2>
      </header>
      <form ref={form} onSubmit={sendEmail} className="form-container">
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    </section>
  );
}
