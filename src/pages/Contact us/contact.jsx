import React, { useState } from "react";
import "./contact.css";
import { useForm, ValidationError } from "@formspree/react";

export const Contact = () => {
  const [state, handleSubmit] = useForm("mleyqvad");
  if (state.succeeded) {
    return (
      <p>
        Thanks for bringing the issue to our notice.
        <br /> Our Service Engineer will contact you soon.
      </p>
    );
  }
  return (
    <div className="contact">
      <div className="hed">
        <h2>Get in Touch</h2>
      </div>

      
      <div className="hed">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3611.080789843196!2d75.86169697508839!3d25.166749777730637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396f855e711b8ca1%3A0x18dfbcd6f809c423!2sSudarshan%20Chemicals%20Kota!5e0!3m2!1sen!2sin!4v1703942350193!5m2!1sen!2sin"
          height="450"
          style={{ border: 0, width:'90vw',}}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <form onSubmit={handleSubmit} action="https://formspree.io/f/mleyqvad">
        <div className="col">
          <input
            id="name"
            type="name"
            name="name"
            placeholder="Enter your name"
          />

          <input
            id="subject"
            type="subject"
            name="subject"
            placeholder="Enter your subject"
          />
        </div>

        <div className="col">
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Enter your EmailId"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />

          <input
            id="phonenum"
            type="phonenum"
            name="phonenum"
            placeholder="Enter your Phone Number"
          />
        </div>

        <div className="row">
          <textarea id="message" name="message" placeholder="Your Message" />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <button type="submit" disabled={state.submitting}>
            Submit
          </button>
        </div>
      </form>

    </div>
  );
};
