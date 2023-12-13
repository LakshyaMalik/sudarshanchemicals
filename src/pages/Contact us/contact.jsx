import React, { useState } from "react";
import './contact.css';
import { useForm, ValidationError } from '@formspree/react';

export const Contact = () => {
      
  const [state, handleSubmit] = useForm("mleyqvad");
  if (state.succeeded) {
      return <p>Thanks for bringing the issue to our notice.<br/> Our Service Engineer will contact you soon.</p>;
  }
  return (


    <div className="contact">

      <h2>Get in Touch</h2>

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
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />

      
      <input
        id="phonenum"
        type="phonenum" 
        name="phonenum"
        placeholder="Enter your Phone Number"
      />
        </div>

        <div className="row">
      <textarea
        id="message"
        name="message"
        placeholder="Your Message"
      />
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