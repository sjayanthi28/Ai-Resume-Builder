function PersonalInfo() {
  return (
    <div style={{marginTop:"30px"}}>
      <h3>Personal Info</h3>

      <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:"15px"}}>

        <input placeholder="Full Name" />

        <input placeholder="Email" />

        <input placeholder="Phone" />

        <input placeholder="Location" />

        <input placeholder="Github" />

        <input placeholder="LinkedIn" />

      </div>

      <textarea
        placeholder="Professional Summary"
        style={{
          width:"100%",
          marginTop:"15px",
          height:"100px"
        }}
      />

    </div>
  )
}

export default PersonalInfo