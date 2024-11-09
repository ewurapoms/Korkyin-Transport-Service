# Korkyin-Transport-Service

![PMC_banner](https://github.com/ewurapoms/shopAPI/blob/main/database/banner.jpg)


# Set up a React project using Create React App
npx create-react-app korkyin-frontend
cd korkyin-frontend

# Install Required Dependencies
npm install axios react-router-dom bootstrap

# Create folders for components and page
src/
  components/
    Navbar.js
    Footer.js
  pages/
    LandingPage.js
    RiderSignup.js
    EmployerSignup.js
    Login.js
    Dashboard.js
    Confirmation.js

# In components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/signup-rider">Sign Up as a Rider</Link>
    <Link to="/signup-employer">Sign Up as an Employer</Link>
    <Link to="/login">Login</Link>
    <Link to="/contact">Contact Us</Link>
  </nav>
);

export default Navbar;

# In components/Footer.js
import React from 'react';

const Footer = () => (
  <footer>
    <p>&copy; 2024 Korkyin. All rights reserved.</p>
  </footer>
);

export default Footer;

# Create Routes in App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import RiderSignup from './pages/RiderSignup';
import EmployerSignup from './pages/EmployerSignup';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Confirmation from './pages/Confirmation';

const App = () => (
  <Router>
    <Navbar />
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route path="/signup-rider" component={RiderSignup} />
      <Route path="/signup-employer" component={EmployerSignup} />
      <Route path="/login" component={Login} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/confirmation" component={Confirmation} />
    </Switch>
    <Footer />
  </Router>
);

export default App;

# In pages/LandingPage.js
import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => (
  <div>
    <header>
      <h1>Welcome to Korkyin</h1>
      <p>Your gateway to professional courier services</p>
    </header>
    <div>
      <Link to="/signup-rider" className="btn btn-primary">Sign Up as a Rider</Link>
      <Link to="/signup-employer" className="btn btn-secondary">Sign Up as an Employer</Link>
    </div>
  </div>
);

export default LandingPage;

# In pages/RiderSignup.js
import React, { useState } from 'react';
import axios from 'axios';

const RiderSignup = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    email: '',
    education: '',
    interest: '',
    payment: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/signup-rider', formData)
      .then(response => {
        console.log(response.data);
        // Redirect to confirmation page
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
      <input type="number" name="age" placeholder="Age" onChange={handleChange} required />
      <select name="gender" onChange={handleChange} required>
        <option value="">Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>
      <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
      <input type="text" name="education" placeholder="Highest Educational Level" onChange={handleChange} required />
      <select name="interest" onChange={handleChange} required>
        <option value="">Interest</option>
        <option value="training">Training</option>
        <option value="employment">Seeking
# end of
