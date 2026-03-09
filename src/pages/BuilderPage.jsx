import StatsProgress from "../components/ui/StatsProgress";

function BuilderPage() {
  return (
    <div className="builder-container">

      <h2>Workspace</h2>

    
      <StatsProgress score={89}/>


      <div className="form-section">

        <h3>Personal Info</h3>

        <div className="form-grid">

          <input type="text" placeholder="Full Name" />
          <input type="email" placeholder="Email" />

          <input type="text" placeholder="Phone" />
          <input type="text" placeholder="Location" />

        </div>

      </div>

    </div>
  );
}

export default BuilderPage;