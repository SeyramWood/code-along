import React from "react";
import "./App.css";
import ProfileCard from "./ProfileCard";

function App() {
  const [data, setData] = React.useState({
    writers: [],
    loading: false,
  });

  const handleClick = () => {
    setData((data) => ({
      ...data,
      loading: true,
    }));
    setTimeout(() => {
      const getWriters = async () => {
        const res = await fetch("./writers.json");
        const results = await res.json();
        setData((data) => ({
          ...data,
          writers: results,
          loading: false,
        }));
      };
      getWriters();
    }, 2000);
  };
  React.useEffect(() => {
    handleClick();
  }, []);

  if (data.loading) {
    return (
      <div>
        <h1>Writers Profile</h1>
        <div className="container">
          <div className="card action">
            <div className="infoText">Loading...</div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="App">
      <button type="button" onClick={handleClick}>
        Fetch Data
      </button>
      <h1>Writer Profiles.</h1>
      {data.writers.length > 0 && (
        <div className="container">
          {data.writers.map((writer) => (
            <ProfileCard writer={writer} key={writer.id} />
          ))}
        </div>
      )}
      {data.writers.length === 0 && (
        <div className="container">
          <div className="card action">
            <div className="infoText">Ooops...no writer profile found.</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
