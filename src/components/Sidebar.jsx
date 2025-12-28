import { NavLink } from "react-router-dom";

function Sidebar({ role, onLogout }) {
  return (
    <div className="sidebar">
      {/* APP TITLE */}
      <h2>🎓 EduTrack</h2>

      {/* NAVIGATION */}
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "link active" : "link"
        }
      >
        Dashboard
      </NavLink>

      <NavLink
        to="/attendance"
        className={({ isActive }) =>
          isActive ? "link active" : "link"
        }
      >
        Attendance
      </NavLink>

      <NavLink
        to="/marks"
        className={({ isActive }) =>
          isActive ? "link active" : "link"
        }
      >
        Marks
      </NavLink>

      <NavLink
        to="/timetable"
        className={({ isActive }) =>
          isActive ? "link active" : "link"
        }
      >
        Timetable
      </NavLink>

      <NavLink
        to="/profile"
        className={({ isActive }) =>
          isActive ? "link active" : "link"
        }
      >
        Profile
      </NavLink>

      {/* LOGOUT */}
      <button className="logout" onClick={onLogout}>
        Logout
      </button>

      {/* ROLE DISPLAY */}
      <div
        style={{
          marginTop: "15px",
          fontSize: "13px",
          textAlign: "center",
          opacity: 0.8,
        }}
      >
        Role:
        <b
          style={{
            marginLeft: "5px",
            color: role === "admin" ? "#22c55e" : "#38bdf8",
          }}
        >
          {role.toUpperCase()}
        </b>
      </div>
    </div>
  );
}

export default Sidebar;
