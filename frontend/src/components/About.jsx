import React from "react";

const About = () => {
  return (
    <main className="about-container">
      <section className="about-hero">
        <h1>About Aditya Fitness</h1>
        <p>
          Welcome to <strong>Aditya Fitness</strong> — your ultimate destination
          for achieving your fitness goals. We believe in transforming lives through
          dedication, discipline, and personalized training.
        </p>
      </section>

      <section className="about-content">
        <h2>Our Mission</h2>
        <p>
          Our mission is to inspire and empower people to live a healthier life.
          We provide top-class equipment, certified trainers, and a motivating
          environment to help you reach your maximum potential.
        </p>

        <h2>Why Choose Us?</h2>
        <ul>
          <li>Certified & experienced trainers</li>
          <li>Modern gym equipment</li>
          <li>Personalized diet plans</li>
          <li>Friendly and supportive community</li>
        </ul>
      </section>
    </main>
  );
};

export default About;
