import '../App.css';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase.js";
import { useNavigate } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";

export default function Register(){
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
      e.preventDefault();
      const { email, password, firstName, lastName } = e.target.elements;

      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email.value, password.value);
        const user = userCredential.user;

        await setDoc(doc(db, "users", user.uid), {
          firstName: firstName.value,
          lastName: lastName.value,
          email: email.value
        });

        console.log(user);
        navigate("/dashboard");
      } catch (err) {
        const errorCode = err.code;
        const errorMessage = err.message;
        console.log(errorCode);
        console.log(errorMessage);
      }
    };
    return(
        <div className="d-flex justify-content-center align-items-center mt-5">
        <div className="col-md-6">
          <div className="card bg-dark text-white p-4 border-light">
            <h1 className="mb-4 text-center">Registro</h1>
            <form onSubmit={handleSubmit}>
            <div className="form-group mb-3">
              <label htmlFor="firstName">Nombre:</label>
              <input
                type="text"
                name="firstName"
                className="form-control"
                id="firstName"
                required
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="lastName">Apellido:</label>
              <input
                type="text"
                name="lastName"
                className="form-control"
                id="lastName"
                required
              />
            </div>
              <div className="form-group mb-3">
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" className="form-control" id="email" required />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" className="form-control" id="password" required />
              </div>
              <button type="submit" className="btn btn-primary w-100">Registrarse</button>
            </form>
          </div>
        </div>
      </div>
    )
}