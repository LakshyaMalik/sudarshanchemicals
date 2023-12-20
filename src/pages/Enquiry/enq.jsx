import React from "react";
import './enq.css';
import { useForm, ValidationError } from '@formspree/react';

export const Enquiry = () => {

    const [state, handleSubmit] = useForm("mleyqvad");
  if (state.succeeded) {
      return <p>Thanks for bringing the issue to our notice.<br/> Our Service Engineer will contact you soon.</p>;
  }
    return(

        <div className="enq">

            <div className="hed">
                <h2>Reach Out to Us</h2>
            </div>
            <form onSubmit={handleSubmit} action="https://formspree.io/f/mleyqvad">

            <input
        id="name"
        type="name" 
        name="name"
        placeholder="Name"
      />

      
      <input
        id="company"
        type="company" 
        name="company"
        placeholder="Company"
      />

      <input
        id="email"
        type="email" 
        name="email"
        placeholder="Email"
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
        placeholder="Mobile"
      />
      
      <input
        id="address"
        type="address" 
        name="address"
        placeholder="Address"
      />

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
            </form>
        </div>

    );

};