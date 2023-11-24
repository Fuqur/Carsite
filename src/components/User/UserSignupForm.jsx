import React, { useState } from "react";
import styles from "../../styles/User.module.css";

const UserSignupForm = ({ closeForm, show, onSubmit }) => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    avatar: "",
    accountCreated: true,
  });

  const [loginMode, setLoginMode] = useState(false); 

  const handleChange = (event) => {
    const { value, name } = event.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(values);
  };

  const toggleMode = () => {
    setLoginMode(!loginMode); 
  };

  if (!show) {
    return null;
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.close} onClick={closeForm}>
        <svg className="icon">
          <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#close`} />
        </svg>
      </div>
      <div className={styles.title}>
        {loginMode ? "Log In" : "Sign Up"}
      </div>
      <form className={styles.form} onSubmit={handleSubmit}>
        {!loginMode && (
          <div className={styles.group}>
            <input
              type="name"
              placeholder="Your name"
              name="name"
              value={values.name}
              autoComplete="off"
              onChange={handleChange}
              required
            />
          </div>
        )}
        <div className={styles.group}>
          <input
            type="email"
            placeholder="Your email"
            name="email"
            value={values.email}
            autoComplete="off"
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.group}>
          <input
            type="password"
            placeholder="Your password"
            name="password"
            value={values.password}
            autoComplete="off"
            onChange={handleChange}
            required
          />
        </div>
        {!loginMode && (
          <div className={styles.group}>
            <input
              type="avatar"
              placeholder="Your avatar"
              name="avatar"
              value={values.avatar}
              autoComplete="off"
              onChange={handleChange}
              required
            />
          </div>
        )}
        <div className={styles.link} onClick={toggleMode}>
          {loginMode ? "I don't have an account" : "I already have an account"}
        </div>
        <button type="submit" className={styles.submit}>
          {loginMode ? "Log In" : "Sign Up"}
        </button>
      </form>
    </div>
  );
};

export default UserSignupForm;
