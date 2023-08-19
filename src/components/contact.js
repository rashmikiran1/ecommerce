import React, { useState } from "react";
import classes from '../style/contact.module.css';

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('https://ecommerce-ad7ec-default-rtdb.firebaseio.com/contacts.json', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, phoneNumber })
      });

      if (response.ok) {
        console.log('Contact data added successfully');
        setName("");
        setEmail("");
        setPhoneNumber("");
      } else {
        console.error('Error adding contact data');
      }
    } catch (error) {
      console.error('Error adding contact data:', error);
    }
  };

  return (
    <div className={classes.contactContainer}>
    <h3 className={classes.title}>REGISTER</h3>
    <form className={classes.form} onSubmit={handleSubmit}>
      <label className={classes.label}>
        Name:
        <input className={classes.input} type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label className={classes.label}>
        Email:
        <input className={classes.input} type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label className={classes.label}>
        Phone Number:
        <input className={classes.input} type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
      </label>
      <button className={classes.submitButton} type="submit">Submit</button>
    </form>
  </div>
  );
}

export default Contact;
