import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateName, updateEmail } from './action';
import App from '../../../assignment-temp/src/App';

const App = () => {
  const dispatch = useDispatch();
  
  // Select name and email from the Redux store
  const name = useSelector((state) => state.name);
  const email = useSelector((state) => state.email);

  // Handle real-time updates for name
  const handleNameChange = (e) => {
    const newName = e.target.value;
    dispatch(updateName(newName));
  };

  // Handle real-time updates for email
  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    dispatch(updateEmail(newEmail));
  };

  return (
    <div>
      <h1>User Info (Redux)</h1>

      <label>Name:</label>
      <input
        type="text"
        value={name}
        onChange={handleNameChange}
      />

      <label>Email:</label>
      <input
        type="email"
        value={email}
        onChange={handleEmailChange}
      />

      <div>
        <p>Current values in store:</p>
        <p>Name - {name}</p>
        <p>Email - {email}</p>
      </div>
    </div>
  );
};

  export default App;
