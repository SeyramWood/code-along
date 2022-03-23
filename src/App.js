import React from "react";
import "./App.css";
import { ProfileCard } from "./ProfileCard";

function App() {
  const [writers, setWriters] = React.useState([]);

  React.useEffect(() => {
    const getWriters = async () => {
      const res = await fetch("./writers.json");
      const data = await res.json();
      setWriters(data);
    };
    getWriters();
  }, []);

  return (
    <div className="App">
      <h1>Writer Profiles.</h1>
      <div className="container">
        {writers.map((writer) => (
          <ProfileCard writer={writer} key={writer.id} />
        ))}
      </div>
    </div>
  );
}

export default App;
