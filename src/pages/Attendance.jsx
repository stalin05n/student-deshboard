import { useEffect, useState } from "react";
import { attendanceData } from "../data/studentData";

function Attendance({ role }) {
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("attendance")) || attendanceData
  );

  const [newRow, setNewRow] = useState({
    subject: "",
    total: "",
    attended: "",
  });

  useEffect(() => {
    localStorage.setItem("attendance", JSON.stringify(data));
  }, [data]);

  const addRecord = () => {
    if (!newRow.subject) return;
    setData([...data, newRow]);
    setNewRow({ subject: "", total: "", attended: "" });
  };

  const deleteRow = (i) => {
    if (window.confirm("Delete record?")) {
      setData(data.filter((_, index) => index !== i));
    }
  };

  return (
    <div>
      <h1>📅 Attendance</h1>

      {/* CREATE */}
      {role === "admin" && (
        <div style={{ marginBottom: 20 }}>
          <input
            placeholder="Subject"
            value={newRow.subject}
            onChange={(e) => setNewRow({ ...newRow, subject: e.target.value })}
          />
          <input
            placeholder="Total"
            type="number"
            value={newRow.total}
            onChange={(e) => setNewRow({ ...newRow, total: e.target.value })}
          />
          <input
            placeholder="Attended"
            type="number"
            value={newRow.attended}
            onChange={(e) =>
              setNewRow({ ...newRow, attended: e.target.value })
            }
          />
          <button onClick={addRecord}>Add</button>
        </div>
      )}

      <table>
        <thead>
          <tr>
            <th>Subject</th>
            <th>Total</th>
            <th>Attended</th>
            <th>%</th>
            {role === "admin" && <th>Actions</th>}
          </tr>
        </thead>

        <tbody>
          {data.map((a, i) => {
            const percent = Math.round((a.attended / a.total) * 100);
            return (
              <tr key={i}>
                <td>{a.subject}</td>
                <td>{a.total}</td>
                <td>{a.attended}</td>
                <td className={percent < 75 ? "risk" : "safe"}>
                  {percent}%
                </td>
                {role === "admin" && (
                  <td>
                    <button onClick={() => deleteRow(i)}>Delete</button>
                  </td>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Attendance;
