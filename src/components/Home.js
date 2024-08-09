import React from 'react';
import Navbar from '../components/Navbar';
import './Home.css';

const Home = () => {
  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <header className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Call: +254 123 456 789</h1>
            <h3>Opening Hours: Mon - Sat: 7 AM - 7 PM</h3>
            <a href='/Services'>
            <button className="book-now-btn">Book Now</button>
            </a>
             
          </div>
          <div className="hero-image">
            {/* Insert the hero image here */}
            <img src="https://media.istockphoto.com/id/930527820/photo/two-workers-with-a-truck-moving-large-box.jpg?s=612x612&w=0&k=20&c=e7hb_A2G70T9WoUhJKzdqK0jZ1WZRtoyVe_wQfw22eQ=" alt="Moving Van" />
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section className="services-section">
        <h2>Welcome to Our Services</h2>
        <p>
          With professional movers, we provide the following services at affordable rates, so suit and match your needs and your budget.
        </p>
        <div className="services-list">
          <div className="service-card">
            <i className="fas fa-map-marker-alt"></i>
            <h3>Local Moving</h3>
            <p>We’ll happily transport your household from one location to another.</p>
          </div>
          <div className="service-card">
            <i className="fas fa-truck-moving"></i>
            <h3>Long Distance Moving</h3>
            <p>Move with ease across long distance within Kenya.</p>
          </div>
          <div className="service-card">
            <i className="fas fa-box-open"></i>
            <h3>Moving Kits</h3>
            <p>We offer moving kits so you don’t have to worry about packing up your things.</p>
          </div>
          <div className="service-card">
            <i className="fas fa-boxes"></i>
            <h3>Box Delivery</h3>
            <p>We have all packaging supplies, including boxes, packaging tape, and bubble wrap.</p>
          </div>
          <div className="service-card">
            <i className="fas fa-dolly"></i>
            <h3>Loading and Unloading</h3>
            <p>We allow our customers to rent the truck, and we will load and unload.</p>
          </div>
        </div>
      </section>

      {/* Best Movers Section */}
      <section className="best-movers-section">
        <h2>Welcome to the Marvel Movers</h2>
        <ul>
          <li>Your requirement is our wish</li>
          <li>Moving is quick and easy</li>
          <li>We are affordable</li>
          <li>We never disappoint</li>
        </ul>
        <div className="best-movers-image">
          <img src="https://media.istockphoto.com/id/1438175609/photo/cargo-delivery.jpg?s=612x612&w=0&k=20&c=8s7yrsjqzmSG-Hw-g93llUSou6eWh1xbTBdSoQtjKLI=" alt="Best Movers Team" />
        </div>
      </section>
    </div>
  );
};

export default Home;
