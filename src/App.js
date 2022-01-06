import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./components/Routes";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      {" "}
      <Header />
      <Routes />
    </Router>
  );
}

export default App;
