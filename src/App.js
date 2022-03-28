import React from "react";
import "./App.css";
import ProfileForm from "./components/ProfileForm";
import ProfileCard from "./ProfileCard";

function App() {
  const [profiles, setProfiles] = React.useState([
    {
      firstName: "Hannah",
      lastName: "Montanah",
      email: "hannah.montana@gmail.com",
      phone: "+233 244 555 000",
    },
  ]);

  const submit = (profile) => {
    setProfiles((state) => [profile, ...state]);
  };
  return (
    <div className="App">
      <h1>Writer Profiles.</h1>
      <div className="container">
        <ProfileForm submit={submit} />
        {profiles.map((writer) => (
          <ProfileCard writer={writer} key={writer.id} />
        ))}
      </div>
      {/* {data.writers.length === 0 && (
        <div className="container">
          <div className="card action">
            <div className="infoText">Ooops...no writer profile found.</div>
          </div>
        </div>
      )} */}
    </div>
  );
}

export default App;
