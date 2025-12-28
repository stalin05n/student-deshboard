import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";

import Sidebar from "./components/Sidebar";

import Dashboard from "./pages/Dashboard";
import Attendance from "./pages/Attendance";
import Marks from "./pages/Marks";
import Timetable from "./pages/Timetable";
import Profile from "./pages/Profile";
import Login from "./pages/Login";

function App() {
  /* =========================
     LOGIN STATE
  ========================= */
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  /* =========================
     ROLE STATE
     admin / student
  ========================= */
  const [role, setRole] = useState("admin");
  // change to "student" to test permissions

  /* =========================
     LOGOUT
  ========================= */
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  /* =========================
     IF LOGGED OUT → LOGIN PAGE
  ========================= */
  if (!isLoggedIn) {
    return <Login onLogin={() => setIsLoggedIn(true)} />;
  }

  /* =========================
     MAIN APP
  ========================= */
  return (
    <div className="app">
      <Sidebar role={role} onLogout={handleLogout} />

      <div className="main">
        <Routes>
          <Route path="/" element={<Dashboard />} />

          <Route
            path="/attendance"
            element={<Attendance role={role} />}
          />

          <Route
            path="/marks"
            element={<Marks role={role} />}
          />

          <Route path="/timetable" element={<Timetable />} />
          <Route path="/profile" element={<Profile />} />

          {/* fallback */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
