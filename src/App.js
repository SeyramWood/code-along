import "./App.css";
import { ProfileCard } from "./ProfileCard";
import writers from "./writers";

function App() {
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
