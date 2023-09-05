import React, { useContext, useRef, useState } from 'react';
import classes from '../style/signup.module.css';
import Authcontext from '../store/authContext';

function Password() {
  const passwordinputRef= useRef();
  const authCtx = useContext(Authcontext);
 

const handleSubmit = (event) => {
  event.preventDefault();
  const password = passwordinputRef.current.value;
    fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyCGIlzbT0foDEl35J3c9DtKR1fC7K_Tkaw', {
        method: 'POST',
        body: JSON.stringify({
         idToken:authCtx.token,
          password:password,
          returnSecureToken: false,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      })
    };
  return (
    <div className={classes.contactContainer}>
      <form  className={classes.form} onSubmit={handleSubmit}>
        <div>
          <label className={classes.label} htmlFor="password">NewPassword</label>
          <input className={classes.input}
            type="password"
            id="password"
            name="password"
            required ref={passwordinputRef}
          />
        </div>
        <button>new password</button>
      </form>
    </div>
  );
}
export default Password;
