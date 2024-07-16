import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { doc, getDoc } from "firebase/firestore";
import { db } from '../firebase';
import { UserContext } from '../UserContext';

const Dashboard = () => {
  const { user } = useContext(UserContext);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      if (user && user.uid) {
        try {
          console.log("Fetching data for user:", user.uid);
          const docRef = doc(db, "users", user.uid);
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            setUserData(docSnap.data());
          } else {
            console.log("No such document!");
            setError("No such document!");
          }
        } catch (err) {
          console.error("Error fetching user data:", err);
          setError("Error fetching user data.");
        } finally {
          setLoading(false);
        }
      } else {
        setError("User is not authenticated or UID is missing.");
        setLoading(false);
      }
    };

    fetchUserData();
  }, [user]);

  return (
    <div className="container mt-4 text-white">
      <h1 className="mb-4">Dashboard</h1>
      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="card bg-dark border-light h-100 d-flex flex-row product-card">
            <div className="w-50 d-flex align-items-center justify-content-center p-3">
              <i className="fas fa-user fa-5x text-white"></i>
            </div>
            <div className="w-50 d-flex flex-column justify-content-center p-3">
              <Link to="/dashboard" className="text-decoration-none text-white">
                <h2 className="h5 mb-2">Profile</h2>
                {loading ? (
                  <p>Loading...</p>
                ) : error ? (
                  <p>{error}</p>
                ) : userData ? (
                  <>
                    <p className="mb-1">Name: {userData.firstName} {userData.lastName}</p>
                    <p className="mb-1">Email: {userData.email}</p>
                  </>
                ) : null}
                <button className="btn btn-primary mt-2">Go to Profile</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card bg-dark border-light h-100 d-flex flex-row product-card">
            <div className="w-50 d-flex align-items-center justify-content-center p-3">
              <i className="fas fa-box-open fa-5x text-white"></i>
            </div>
            <div className="w-50 d-flex flex-column justify-content-center p-3">
              <Link to="/dashboard" className="text-decoration-none text-white">
                <h2 className="h5 mb-2">Orders</h2>
                <p className="mb-1">View your orders and order history.</p>
                <button className="btn btn-primary mt-2">View Orders</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card bg-dark border-light h-100 d-flex flex-row product-card">
            <div className="w-50 d-flex align-items-center justify-content-center p-3">
              <i className="fas fa-cogs fa-5x text-white"></i>
            </div>
            <div className="w-50 d-flex flex-column justify-content-center p-3">
              <Link to="/dashboard" className="text-decoration-none text-white">
                <h2 className="h5 mb-2">Settings</h2>
                <p className="mb-1">Change your account settings.</p>
                <button className="btn btn-primary mt-2">Account Settings</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
