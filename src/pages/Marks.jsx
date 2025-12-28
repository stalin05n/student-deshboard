import { useEffect, useState } from "react";
import { marksData } from "../data/studentData";

const gradeMap = {
  "A+": 10,
  "A": 9,
  "B+": 8,
  "B": 7,
};

function Marks({ role }) {
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("marks")) || marksData
  );

  const [newMark, setNewMark] = useState({
    subject: "",
    grade: "A",
  });

  const [gpa, setGpa] = useState(0);

  // 💾 save like backend
  useEffect(() => {
    localStorage.setItem("marks", JSON.stringify(data));
  }, [data]);

  // 📊 auto GPA
  useEffect(() => {
    const total = data.reduce(
      (sum, m) => sum + gradeMap[m.grade],
      0
    );
    setGpa((total / data.length).toFixed(2));
  }, [data]);

  const addMark = () => {
    if (!newMark.subject) return;
    setData([...data, newMark]);
    setNewMark({ subject: "", grade: "A" });
  };

  const deleteMark = (i) => {
    if (window.confirm("Delete mark?")) {
      setData(data.filter((_, index) => index !== i));
    }
  };

  const updateGrade = (i, grade) => {
    const updated = [...data];
    updated[i].grade = grade;
    setData(updated);
  };

  return (
    <div>
      <h1>📝 Marks</h1>

      {/* CREATE */}
      {role === "admin" && (
        <div style={{ marginBottom: 20 }}>
          <input
            placeholder="Subject"
            value={newMark.subject}
            onChange={(e) =>
              setNewMark({ ...newMark, subject: e.target.value })
            }
          />
          <select
            value={newMark.grade}
            onChange={(e) =>
              setNewMark({ ...newMark, grade: e.target.value })
            }
          >
            <option>A+</option>
            <option>A</option>
            <option>B+</option>
            <option>B</option>
          </select>
          <button onClick={addMark}>Add</button>
        </div>
      )}

      <table>
        <thead>
          <tr>
            <th>Subject</th>
            <th>Grade</th>
            {role === "admin" && <th>Action</th>}
          </tr>
        </thead>

        <tbody>
          {data.map((m, i) => (
            <tr key={i}>
              <td>{m.subject}</td>
              <td>
                {role === "admin" ? (
                  <select
                    value={m.grade}
                    onChange={(e) => updateGrade(i, e.target.value)}
                  >
                    <option>A+</option>
                    <option>A</option>
                    <option>B+</option>
                    <option>B</option>
                  </select>
                ) : (
                  m.grade
                )}
              </td>

              {role === "admin" && (
                <td>
                  <button onClick={() => deleteMark(i)}>Delete</button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>

      <h2 style={{ marginTop: 20 }}>
        🎯 Auto GPA: <b>{gpa}</b>
      </h2>
    </div>
  );
}

export default Marks;
