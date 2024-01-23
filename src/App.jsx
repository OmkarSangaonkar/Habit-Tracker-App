import { Routes, Route } from "react-router-dom";
import Home from "./components/today/Home";
import TopNav from "./components/today/TopNav";
import Weekly from "./components/week/Weekly";

function App() {
  return (
    <div className="App">
      <div className="Container">
        <TopNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/weekly" element={<Weekly />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
