// DEPENDENCIES
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// REACT COMPONENTS
import Index from "./Components/Index.js"

// STYLESHEETS
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <main>
          <Routes>
            <Route path="/" element={<div>Welcome to the Eggplant List Homepage</div>} />
            <Route path="/eggplants" element={<Index />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
