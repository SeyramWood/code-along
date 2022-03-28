import React, { useState } from "react";

const ProfileForm = ({ submit }) => {
  const [profile, setProfile] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((state) => ({
      ...state,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    submit(profile);
    setProfile({ firstName: "", lastName: "", email: "", phone: "" });
  };
  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Personal Information</legend>
        <input
          type="text"
          id=""
          name="firstName"
          value={profile.firstName}
          onChange={handleChange}
        />
        <input
          type="text"
          id=""
          name="lastName"
          value={profile.lastName}
          onChange={handleChange}
        />
        <input
          type="text"
          id=""
          name="email"
          value={profile.email}
          onChange={handleChange}
        />
        <input
          type="text"
          id=""
          name="phone"
          value={profile.phone}
          onChange={handleChange}
        />
      </fieldset>
      <button>Submit</button>
    </form>
  );
};

export default ProfileForm;
