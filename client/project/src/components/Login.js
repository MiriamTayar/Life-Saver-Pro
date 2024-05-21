import React from "react";
import { useState } from 'react';
import './login.css';
import ImageUploader from './ImageUploader';
import { useNavigate } from "react-router-dom";
import Header from "./Header";

const Login = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate()


  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can add your authentication logic
    console.log('Username:', username);
    console.log('Password:', password);
    // For now, let's just clear the fields after submission

    // onLoginSuccess(true);
    // setIsLoggedIn(true);
    sessionStorage.setItem('user', username)
    navigate('../userArea')

  };

  return (
    <div>
            <Header />

<p className="p">A smart system that helps locate and save people from drowning, our project offers an innovative system that makes it possible to swim a pool experience in complete calm and safety. Our basic goal is to develop a smart pool, which will provide enjoyable and safe swimming. Our pool is equipped with advanced cameras, which detect a case of drowning or pre-drowning, in such a situation, the alarm system works, and the pool floor rises automatically. Beyond that, the area where the drowning person is found will be clearly marked to allow access to the dangerous area as quickly as possible. It is important to note that the activation of the alarm system and its conduct is done according to the distribution of people in the pool and according to precise calculations, in order to prevent unnecessary alarms in the background
</p>

      {/* <ImageUploader /> */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username" ></label>
          <input
            size="30"
            type="text"
            name="form_fields[name]"
            id="form-field-name"
            class="elementor-field elementor-size-sm elementor-field-textual"
            placeholder="Name"
            required="required"
            aria-required="true"
            value={username}
            onChange={handleUsernameChange}

          />
        </div>
        <div>
          <label htmlFor="password"></label>
          <input
            type="password"
            id="password"
            size="30"
            name="form_fields[name]"
            class="elementor-field elementor-size-sm elementor-field-textual"
            placeholder="Password"
            required="required"
            aria-required="true"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <input type="submit" value="User exist"/>
        <input type="submit" value="New user"/>
        
        {/* <button onClick={handleLogin}>Login</button> */}
      </form>
    </div>
  );
};

export default Login;
