import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Services from './components/services';
import SignupForm from './components/SignupForm';
import Login from './components/Login';
import ContactUs from './components/Contactus';
import Booking from './components/Booking';

const root = ReactDOM.createRoot(document.getElementById('root'));
 const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "Services",
    element: <Services />
  },
  {
    path: "SignupForm",
    element: <SignupForm />
  },
  {
    path: "Login",
    element: <Login />
  },
  {
    path: "Contact",
    element: <ContactUs />
  },
  {
    path: "Booking",
    element: <Booking />
  }
  
 ])

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
