import React from "react";

const WorkoutSessions = () => {
  return (
    <section className="workout_session" id="workout-sessions">
      <div className="wrapper">
        <h1>TOP WORKOUT SESSION</h1>
        <p>
        Strength Training: Bench press, Deadlifts, Squats
        </p>
        <img src="/img3.jpg" alt="workout" />
      </div>
      <div className="wrapper">
        <h1>FEATURED BOOTCAMPS</h1>
        <p>
        Join our high-intensity bootcamps designed to burn fat, build strength, and boost endurance in just a few weeks.
        </p>
        <div className="bootcamps">
          <div>
            <h4>HIIT Fat-Burning Bootcamp.</h4>
            <p>
            Get Fit Fast with High-Intensity Interval Training <br />
            Join our 4-week intense bootcamp focused on burning fat and building endurance. Perfect for those short on time but looking for maximum results. <br />
            <h5>Outdoor Training Zone or Gym Hall A</h5>
            <h3>Monday, Wednesday, Friday - 6 AM to 7 AM </h3>
            </p>
          </div>
          <div>
            <h4>Strength & Conditioning Bootcamp</h4>
            <p>
            Build Muscle and Increase Power <br />
            This 6-week bootcamp focuses on full-body strength training with an emphasis on lifting, bodyweight exercises, and conditioning circuits. Great for all fitness levels. <br />
            <h5>Weight Room or Gym Hall B </h5>
            <h3>Tuesday and Thursday - 5 PM to 6 PM br</h3>
            </p>
          </div>
          <div>
            <h4>Yoga & Flexibility Bootcamp</h4>
            <p>
            Improve Mobility and Flexibility in 4 Weeks <br />
            A relaxing yet effective bootcamp designed to improve your flexibility, balance, and mindfulness. Great for de-stressing and increasing overall mobility. <br />
            <h5>Yoga Studio or Outdoor Garden</h5>
           <h3> Monday, Wednesday - 7 AM to 8 AM </h3>
            </p>
          </div>
          <div>
            <h4>Boxing Bootcamp</h4>
            <p>
            Learn the Basics of Boxing While Getting Fit <br />
            Punch your way to fitness in this high-energy, 5-week boxing bootcamp. Learn basic boxing techniques, improve cardio, and tone your body.<br />
            <h5>Boxing Ring or Gym Hall C</h5>
           <h3> Tuesday and Thursday - 6 PM to 7 PM</h3>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutSessions;