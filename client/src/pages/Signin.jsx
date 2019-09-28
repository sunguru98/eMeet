import React from 'react'

const Signin = () => {
  return (
    <section>
      <form action="" class="registerform">

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

      <div class="field is-grouped">
        <div class="control">
          <button class="button is-link">Submit</button>
        </div>
      </div>
    </form>
    </section>
  )
}

export default Signin