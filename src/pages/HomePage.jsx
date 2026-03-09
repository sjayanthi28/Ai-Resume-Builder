function HomePage() {
  return (
    <div className="home-container">

      <h2>Choose resume type</h2>

      <div className="resume-options">

        <div className="resume-card">
          <span style={{fontSize:"40px"}}>🎓</span>
          <p>Beginner</p>
        </div>

        <div className="resume-card">
          <span style={{fontSize:"40px"}}>💼</span>
          <p>Experienced</p>
        </div>

      </div>

    </div>
  );
}

export default HomePage;