import React from 'react';

export const Login = (props) => {
  return (
    <div>
      <form className="form-signin">
        <img className="mb-4" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72" />
        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
        <label className="sr-only">Email address
          <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autoFocus />
        </label>
        <label className="sr-only">Password
          <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
        </label>
        <div className="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me" /> Remember me
          </label>
        </div>
        <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
        <p className="mt-5 mb-3 text-muted">&copy; 2017-2018</p >
      </form>
    </div>
  )
};