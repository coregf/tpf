import { auth } from "../firebase";
import React from 'react';

function Logout({ user, setUser }) {
  const logout = () => {
    auth
      .signOut()
      .then(() => {
        setUser(null);
        console.log("User signed out successfully");
      })
      .catch((error) => {
        console.error("Error signing out:", error);
      });
  };
  return <div className="d-flex align-items-center">
   <button className="btn btn-secondary m-3">
   {user.email}
  </button>
  <button className="btn btn-danger" onClick={logout}><i className="fas fa-sign-out-alt"></i></button>

</div>;
}

export default Logout;
