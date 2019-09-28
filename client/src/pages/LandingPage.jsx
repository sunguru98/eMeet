import React from "react";
import "./../styles/landingstyle.css";
const LandingPage = () => {
  return (
    <section className="LandingPage">
      <h1 style={{ color: "#03044D" }} className="title is-1">
        E-meet
      </h1>
      <h2 className="is-2">Online, Inperson. Connect everywhere</h2>
      <div class="button-wrapper">
        <button class="button is-primary">Register</button>
        <button class="button is-primary">Login</button>
      </div>
    </section>
  );
};

export default LandingPage;
