// import React from "react";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { BrowserRouter as Router } from "react-router-dom";
// import "./App.css";
// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import WorkoutSessions from "./components/WorkoutSessions";
// import Gallery from "./components/Gallery";
// import Pricing from "./components/Pricing";
// import Contact from "./components/Contact";
// import BMICalculator from "./components/BMICalculator";
// import Footer from "./components/Footer";
// import About from "./components/About";

// const App = () => {
//   return (
//     <Router>
//       <Navbar />
//       <Hero />
//       <WorkoutSessions />
//       <Gallery />
//       <Pricing />
//       <Contact />
//       <BMICalculator />
//       <About/>
//       <Footer />
//       <ToastContainer theme="dark" position="top-center" />
//     </Router>
//   );
// };

// export default App;

import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WorkoutSessions from "./components/WorkoutSessions";
import Gallery from "./components/Gallery";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import BMICalculator from "./components/BMICalculator";
import Footer from "./components/Footer";
import About from "./components/About";
import Login from "./components/Login";   // agar login page banaya ho
import Signup from "./components/Signup"; // agar signup page banaya ho

const App = () => {
  return (
    <Router>
      <Navbar />

      <Routes>
        {/* Home Page Route */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <WorkoutSessions />
              <Gallery />
              <Pricing />
              <Contact />
              <BMICalculator />
              <Footer />
            </>
          }
        />

        {/* About Page Route */}
        <Route path="/about" element={<About />} />

        {/* Optional: Contact page as separate page */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/pricing" element={<pricing />} />


        {/* Optional: Login and Signup pages */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>

      <ToastContainer theme="dark" position="top-center" />
    </Router>
  );
};

export default App;
