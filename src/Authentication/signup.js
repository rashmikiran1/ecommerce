import React, { useContext, useRef, useState, } from 'react';
import classes from '../style/signup.module.css';
import Authcontext from '../store/authContext';
import { Link, Navigate} from 'react-router-dom';

function SignupForm() {
  const emailinputRef = useRef();
  const passwordinputRef= useRef();
const authCtx = useContext(Authcontext);
  const [isLogin, setisLogin] = useState(true);
   
  const switchHandler = () => {
    setisLogin((prevstate) => !prevstate)
}

const handleSubmit = (event) => {
  event.preventDefault();
  const email = emailinputRef.current.value;
  const password = passwordinputRef.current.value;
  let url;

  if (isLogin) {
    url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCGIlzbT0foDEl35J3c9DtKR1fC7K_Tkaw';
    fetch(url, {
        method: 'POST',
        body: JSON.stringify({
          email,
          password,
          returnSecureToken: true,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((res) => {
          if (res.ok) {
           return res.json();
          } else {
            return res.json().then((data) => {
              let errorMessage = 'Authentication Failed';
              console.error('API Error:', data.error);
              throw new Error(errorMessage)
            });
          }
        }).then((data)=> {
          authCtx.login(data.idToken);
        })
         .catch((err) => {
          alert(err.message)
        });
  } else {
    url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCGIlzbT0foDEl35J3c9DtKR1fC7K_Tkaw';
    fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        email:email,
        password:password,
        returnSecureToken: true,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        if (res.ok) {
         return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = 'Authentication Failed';
            console.error('API Error:', data.error);
            throw new Error(errorMessage)
          });
        }
      }).then((data)=> {
      })
       .catch((err) => {
        alert(err.message)
      });
  }
};


  return (
    <div className={classes.contactContainer}>
      <h1 className={classes.title} >{isLogin ? "login" : "sign up"}</h1>
      <form  className={classes.form} onSubmit={handleSubmit}>
        <div>
          <label className={classes.label} htmlFor="email">Email:</label>
          <input className={classes.input}
            type="email"
            id="email"
            name="email"
            required ref={emailinputRef}
          />
        </div>

        <div>
          <label  className={classes.label} htmlFor="password">Password:</label>
          <input className={classes.input}
            type="password"
            id="password"
            name="password"
            
            required ref={passwordinputRef}
          />
        </div>
        <button  type="submit">
            {isLogin? 'login' : 'create account'}</button>
            {authCtx.isLoggedIn && (
            <Link to="/password">Change Password</Link>
            )}
        <div>
          <button className={classes.submitButton} type="button" onClick={switchHandler}>
            {isLogin? 'create new account' : 'login with existing account'}</button>
        </div>
        {authCtx.isLoggedIn && <Navigate to="/store" />}
      </form>
    </div>
  );
}

export default SignupForm;
