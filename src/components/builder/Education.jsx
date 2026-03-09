import { useState } from "react";

function Education() {

  const [educationList, setEducationList] = useState([
    {
      school: "",
      degree: "",
      startDate: "",
      endDate: ""
    }
  ]);

  const addEducation = () => {
    setEducationList([
      ...educationList,
      { school: "", degree: "", startDate: "", endDate: "" }
    ]);
  };

  return (
    <div className="education-section">

      <h3>Education</h3>

      {educationList.map((edu, index) => (
        <div key={index} className="form-grid">

          <input type="text" placeholder="School" />

          <input type="text" placeholder="Degree / Field" />

          <input type="date" />

          <input type="date" />

        </div>
      ))}

      <button onClick={addEducation}>
        + Add Education
      </button>

    </div>
  );
}

export default Education;