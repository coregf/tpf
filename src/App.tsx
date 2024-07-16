

import { Link, Outlet } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import {UserContext} from './UserContext'
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import Logout from "./pages/Logout";

function App() {
  const { user, setUser } = useContext(UserContext);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user.email);
      }
    });
  }, []);
  return (
    <>
   <header className="bg-dark text-white py-3 border-bottom border-light">
  <div className="container d-flex justify-content-between align-items-center">
    <h1 className="h3">Tienda</h1>
    {user ? (
      <div className="d-flex align-items-center">
        <Link to="/home" className="text-white me-3">Home</Link>
        <Link to="/dashboard" className="text-white me-3">Dashboard</Link>
        <Logout user={user} setUser={setUser} />
      </div>
    ) : (
      <nav className="d-flex">
        <Link to="/" className="text-white me-3">Home</Link>
        <Link to="/register" className="text-white me-3">Registro</Link>
        <Link to="/login" className="text-white">Login</Link>
      </nav>
    )}
  </div>
</header>
<main className="bg-dark text-white py-4">
  <div className="container">
    <Outlet />
  </div>
</main>

  </>
  )
}

export default App
