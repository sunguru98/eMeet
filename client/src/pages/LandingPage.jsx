import React from "react";
import { Link } from "react-router-dom";
import "./../styles/landingstyle.css";
const LandingPage = () => {
  return (
    <section className="LandingPage">
      <h1 style={{ color: "#03044D" }} className="title is-1">
        E-meet
      </h1>
      <h2 className="is-2">Online, Inperson. Connect everywhere</h2>
      <div class="button-wrapper">
        <Link className="button is-primary" to="/register">
          <strong>Register</strong>
        </Link>
        <Link className="button is-primary" to="/signin">
          <strong>Log in</strong>
        </Link>
      </div>
    </section>
  );
};

export default LandingPage;
