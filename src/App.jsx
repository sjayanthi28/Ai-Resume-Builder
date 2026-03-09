import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";
import BuilderPage from "./pages/BuilderPage";
import PreviewPage from "./pages/PreviewPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/builder" element={<BuilderPage />} />
        <Route path="/preview" element={<PreviewPage />} />
      </Routes>
    </Router>
  );
}

export default App;