import { student } from "../data/studentData";

function Profile() {
  return (
    <div>
      <h1>👤 Profile</h1>

      <div className="profile-card">
        <p><b>Name:</b> {student.name}</p>
        <p><b>Register No:</b> {student.regNo}</p>
        <p><b>Department:</b> {student.dept}</p>
        <p><b>Year:</b> {student.year}</p>

        <button className="logout" style={{ marginTop: "20px" }}>
          Download Report
        </button>
      </div>
    </div>
  );
}

export default Profile;
