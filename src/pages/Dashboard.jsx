import { notifications } from "../data/studentData";

function Dashboard() {
  return (
    <div>
      <h1>📊 Dashboard</h1>

      <div className="cards">
        <div className="card">
          <h3>Attendance</h3>
          <p>85%</p>
        </div>
        <div className="card">
          <h3>CGPA</h3>
          <p>8.42</p>
        </div>
        <div className="card">
          <h3>Subjects</h3>
          <p>6</p>
        </div>
        <div className="card">
          <h3>Notifications</h3>
          <p>{notifications.length}</p>
        </div>
      </div>

      <h2>🔔 Notifications</h2>
      <ul>
        {notifications.map((note, i) => (
          <li key={i}>{note}</li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;
