import React, { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../fiebase.init";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  let navigate = useNavigate();
  let location = useLocation();

  const from = location.state?.from?.pathname || "/";
  console.log(from);
  // email
  const handleEmailBlur = event => {
    setEmail(event.target.value);
  };
  // user
  if (user) {
    navigate(from, { replace: true });
  }
  // password
  const handlePasswordBlur = event => {
    setPassword(event.target.value);
  };
  // form submit
  const handleUserSignIn = event => {
    // console.log(email, password);
    event.preventDefault();
    signInWithEmailAndPassword(email, password);
  };

  return (
    <div className="login_container">
      <h2 className="login_title">Login page</h2>
      <div>
        <form onSubmit={handleUserSignIn}>
          <div className="input_group">
            <label htmlFor="email">Email</label>
            <input onBlur={handleEmailBlur} type="email" name="email" id="" />
          </div>
          <div className="input_group">
            <label htmlFor="password">Password</label>
            <input
              onBlur={handlePasswordBlur}
              type="password"
              name="password"
              id=""
            />
          </div>
          <p className="error">{error?.message}</p>
          <p className="loading">{loading && <span>Loading....</span>}</p>
          <input className="submit_login" type="submit" value="Login" />
        </form>
        <p className="new_user">
          New to Ema-john? <Link to="/signup">Create New Account</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
