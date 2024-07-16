import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../index.css'
const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/products.json')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <div className="container mt-4 text-white">
    <h1 className="mb-4">Productos</h1>
    <div className="row">
      {products.map(product => (
        <div key={product.id} className="col-md-6 mb-4">
          <div className="card bg-dark border-light h-100 d-flex flex-row product-card">
            <div className="w-50 d-flex align-items-center justify-content-center p-3">
              <i className="fas fa-box-open fa-5x text-white"></i>
            </div>
            <div className="w-50 d-flex flex-column justify-content-center p-3">
              <Link to={`/product/${product.id}`} className="text-decoration-none text-white">
                <h2 className="h5 mb-2">{product.name}</h2>
                <p className="mb-1">{product.description}</p>
                <h4 className="text-success">${product.price}</h4>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
};

export default Home;
