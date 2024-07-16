import '../index.css'
import React, { useState } from 'react';
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase.js";

export default function Login({user, setUser}){

  const [msgeerror, setFirebaseError] = useState(null);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    signInWithEmailAndPassword(auth, email.value, password.value)
      .then((userCredential) => {
        // Signed in
        setUser(userCredential.user.email);
        console.log(userCredential.user);
        // ...
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        setFirebaseError(errorMessage);
      });
  };
    return(
<div className="d-flex justify-content-center align-items-center mt-5">
  <div className="col-md-6">
    <div className="card bg-dark text-white p-4 border-light">
      <h1 className="mb-4 text-center">Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group text-danger">{msgeerror}</div>
        <div className="form-group mb-3">
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" className="form-control" id="email" required />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" className="form-control" id="password" required />
        </div>
        <button type="submit" className="btn btn-primary w-100">Login</button>
      </form>
    </div>
  </div>
</div>




    )
}