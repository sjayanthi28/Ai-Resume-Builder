import StatsProgress from "../components/ui/StatsProgress";
import PersonalInfo from "../components/builder/PersonalInfo";
import Education from "../components/builder/Education";

function BuilderPage() {
  return (
    <div className="builder-container">

      <h2>Workspace</h2>

      <StatsProgress score={89} />

      <div className="form-section">
        <PersonalInfo />
      </div>

      <Education />

    </div>
  );
}

export default BuilderPage;