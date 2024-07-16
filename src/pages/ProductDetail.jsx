import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../App.css';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch('/products.json')
      .then(response => response.json())
      .then(data => {
        const product = data.find(p => p.id === parseInt(id));
        setProduct(product);
      })
      .catch(error => console.error('Error fetching product:', error));
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
<div className="container mt-4">
  <div className="card bg-dark text-white p-4 shadow-lg">
    <h1 className="mb-4 text-center">{product.name}</h1>
    <p className="mb-3">{product.description}</p>
    <p className="h4 text-success">${product.price}</p>
    <button className="btn btn-primary w-100 mt-4">Comprar</button>
  </div>
</div>
  );
};

export default ProductDetail;
