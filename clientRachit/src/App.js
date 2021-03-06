import React from 'react';
import ReactDom from 'react-dom';
import {Route,Link,BrowserRouter as Router} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import Home from './components/home';
import Features from './components/features';
import Blog from './components/blog';
import Contact from './components/contact';
import Register from './components/register';
import Login from './components/login';

function App() {
  return (
    <React.Fragment>
    <Router>
      <Header />
      <Route path="/" component={Home} exact />
      <Route path="/predictor" component={Features} exact />
      <Route path="/blog" component={Blog} exact />
      <Route path="/contact" component={Contact} exact />
      <Route path="/register" component={Register} exact />
      <Route path="/login" component={Login} exact />
      <Footer />
      </Router>
    </React.Fragment>
    );
}

export default App;
