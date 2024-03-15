import React, { useState } from 'react';
import './Product.css';

const Product = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Product 1', category: 'Category A', price: 50, stock: 100 },
    { id: 2, name: 'Product 2', category: 'Category B', price: 70, stock: 80 },
    // Add more initial product data if needed
  ]);

  const [newProduct, setNewProduct] = useState({
    id: '',
    name: '',
    category: '',
    price: '',
    stock: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleAddProduct = () => {
    setProducts([...products, { ...newProduct, id: Math.random() }]);
    setNewProduct({
      id: '',
      name: '',
      category: '',
      price: '',
      stock: ''
    });
  };

  const handleDeleteProduct = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  const handleEditProduct = (id, updatedProduct) => {
    const updatedProducts = products.map(product =>
      product.id === id ? updatedProduct : product
    );
    setProducts(updatedProducts);
  };

  return (
    <div className="product-container">
      <h2>Product Management</h2>
      <div className="product-list">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <div className="product-info">
              <h3>{product.name}</h3>
              <p>Category: {product.category}</p>
              <p>Price: ${product.price}</p>
              <p>Stock: {product.stock}</p>
            </div>
            <div className="product-buttons">
              <button className="edit-button" onClick={() => handleEditProduct(product.id, { ...product })}>Edit</button>
              <button className="delete-button" onClick={() => handleDeleteProduct(product.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
      <div className="add-product-form">
        <h3>Add New Product</h3>
        <input type="text" name="name" placeholder="Name" value={newProduct.name} onChange={handleChange} />
        <input type="text" name="category" placeholder="Category" value={newProduct.category} onChange={handleChange} />
        <input type="number" name="price" placeholder="Price" value={newProduct.price} onChange={handleChange} />
        <input type="number" name="stock" placeholder="Stock" value={newProduct.stock} onChange={handleChange} />
        <button onClick={handleAddProduct}>Add Product</button>
      </div>
    </div>
  );
}

export default Product;
