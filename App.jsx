import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import RecipeList from "./pages/RecipeList"; // Import RecipeList page

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<RecipeList />} />
        <Route path="/add-recipe" element={<h2>Add Recipe Page (Coming Soon!)</h2>} />
      </Routes>
    </Router>
  );
}

export default App;
