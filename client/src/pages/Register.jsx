import React from "react";
import "./../styles/registerstyle.css";
const Register = () => {
  return (
    <section>
      <form action="" class="registerform">
        <div class="field">
          <label class="label">Name</label>
          <div class="control">
            <input class="input" type="text" />
          </div>
        </div>

        <div class="field">
          <label class="label">Email</label>
          <div class="control has-icons-left has-icons-right">
            <input class="input" type="email" />
            <span class="icon is-small is-left">
              <i class="fas fa-envelope"></i>
            </span>
            <span class="icon is-small is-right">
              <i class="fas fa-exclamation-triangle"></i>
            </span>
          </div>
        </div>

        <div class="field">
          <label class="label">Password</label>
          <p class="control has-icons-left">
            <input class="input" type="password" />
            <span class="icon is-small is-left">
              <i class="fas fa-lock"></i>
            </span>
          </p>
        </div>

        <div class="field space-btw">
          <div class="control">
            <label class="radio">
              <input type="radio" name="question" />
              Staff
            </label>
            <label class="radio">
              <input type="radio" name="question" />
              Student
            </label>
          </div>
        </div>

        <div class="field is-grouped">
          <div class="control">
            <button class="button is-link">Submit</button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Register;
