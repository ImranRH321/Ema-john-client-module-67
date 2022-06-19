import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../fiebase.init";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [createUserWithEmailAndPassword, user] =
    useCreateUserWithEmailAndPassword(auth);
  const navigate = useNavigate();

  // email
  const handleEmailBlur = event => {
    setEmail(event.target.value);
  };

  if (user) {
    navigate("/shop");
  }

  // password
  const handlePasswordBlur = event => {
    setPassword(event.target.value);
  };
  // confirm-password
  const handleConfirmPasswordBlur = event => {
    setConfirmPassword(event.target.value);
  };
  // form submit
  const handleNewUserCreate = event => {
    console.log(email, password, confirm);
    event.preventDefault();
    if (password === confirm) {
      setError("password did not match !! ");
      return;
    }
    if (password.length < 6) {
      setError("password minimum 6 letter charcter");
      return;
    }
    if (!/(?=.*?[#?!@$%^&*-])/.test(password)) {
      setError("At least one special character,");
      return;
    }
    createUserWithEmailAndPassword(email, password);
  };
  return (
    <div className="login_container">
      <h2 className="login_title">Sign Up page</h2>
      <div>
        <form onSubmit={handleNewUserCreate}>
          <div className="input_group">
            <label htmlFor="email">Email</label>
            <input
              onBlur={handleEmailBlur}
              type="email"
              name="email"
              id=""
              required
            />
          </div>
          <div className="input_group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="" required />
          </div>
          <div className="input_group">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              onBlur={handlePasswordBlur}
              type="password"
              name="confirm-password"
              id=""
              required
            />
          </div>
          <p className="error">{error}</p>
          <input
            onBlur={handleConfirmPasswordBlur}
            className="submit_login"
            type="submit"
            value="Login"
          />
        </form>
        <p className="new_user">
          Already have an account? <Link to="/Login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
