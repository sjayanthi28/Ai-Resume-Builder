import React from "react";
import { useNavigate } from "react-router-dom";

function LandingPage() {

  const navigate = useNavigate();

  return (
    <div className="landing-container">

      <p className="badge">KODNEST PREMIUM SERIES</p>

      <h1 className="title">
        Build a Resume <br/>
        <span className="highlight">That Gets Read.</span>
      </h1>

      <p className="description">
        Premium design, AI-powered insights, and ATS-optimized layouts
        to help you land your dream job faster.
      </p>

      <button
        className="start-btn"
        onClick={() => navigate("/builder")}
      >
        Start Building →
      </button>

    </div>
  );
}

export default LandingPage;