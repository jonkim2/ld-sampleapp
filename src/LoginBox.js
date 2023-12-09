import React, { useState } from "react";
import { useLDClient } from "launchdarkly-react-client-sdk";

export default function LoginBox({onSubmit}) {
  const LDClient = useLDClient(); /* This is the hook to upodate user context */

  const [userState, setUserState] = useState({
    firstName: "",
    email: "",
  });
  const [error, setError] = useState("");
  const submitUser = async (e) => {
    e.preventDefault();

    if (!userState.firstName || !userState.email) {
      setError("Please fill out both fields.");
      return; // Stop the function if fields are empty
    }
    if (LDClient) {
      LDClient.identify({ /* method for the hook */
        key: userState.email,
        firstName: userState.firstName,
        email: userState.email,
      });
      LDClient.track('userLogin', { customProperty: userState.email }); /*track it */
      console.log("Logged in as: ", userState.firstName);
      setUserState({ firstName: "", email: "" }); // Clear the form fields
      setError("");
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setUserState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  return (
    <div>
      <div>
        <div>Please enter and submit a few names and emails</div>
            <h1> emails must be yahoo or gmail for the demo to work properly</h1>
        <form onSubmit={submitUser}>
          <div>
            <input
              type="input"
              id="firstName"
              placeholder="Enter First Name"
              value={userState.firstName}
              onChange={handleChange}
            />
            <input
              type="email"
              id="email"
              placeholder="Enter Email"
              value={userState.email}
              onChange={handleChange}
            />
            <button type="submit">
              Submit
            </button>
            {error && <div style={{ color: 'red' }}>{error}</div>}
          </div>
        </form>
      </div>
    </div>
  );
}
