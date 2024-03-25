import "./App.css";
import Home from "./home/Home";

function App() {
  return (
    <>
      <div>
        <p>PPL {new Date().getFullYear().toString()}</p>
        <Home />
      </div>
    </>
  );
}

export default App;
