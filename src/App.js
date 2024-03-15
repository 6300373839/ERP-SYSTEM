// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Product from './components/Product/product'; // Change to lowercase
import Order from './components/Order/order'; // Change to lowercase

const App = () => (
  <Router>
    <div className="app-container">
      <header className="header">
        <h1 className="logo">My ERP System</h1>
        <nav className="nav">
          <NavLink to="/" exact activeClassName="active">Dashboard</NavLink>
          <NavLink to="/products" activeClassName="active">Products</NavLink>
          <NavLink to="/orders" activeClassName="active">Orders</NavLink>
        </nav>
      </header>
      <main className="main">
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/products" component={Product} />
          <Route path="/orders" component={Order} />
        </Switch>
      </main>
    </div>
  </Router>
);

export default App;
