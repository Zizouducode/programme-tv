import "./App.css";
import Program from "./components/Program";
import logo from "./images/logo-m6.png";
import data from "./data.json";

const App = () => {
  return (
    <div className="App">
      <div className="container">
        <img className="logo" src={logo} alt="logo-m6" />
        <Program data={data} />
      </div>
    </div>
  );
};

export default App;
