function Timetable() {
  return (
    <div>
      <h1>⏰ Weekly Timetable</h1>

      <table>
        <thead>
          <tr>
            <th>Day</th>
            <th>9-10</th>
            <th>10-11</th>
            <th>11-12</th>
            <th>1-2</th>
            <th>2-3</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Monday</td>
            <td>Maths</td>
            <td>DBMS</td>
            <td>OS</td>
            <td>Lunch</td>
            <td>CN</td>
          </tr>
          <tr>
            <td>Tuesday</td>
            <td>OS</td>
            <td>Maths</td>
            <td>DBMS</td>
            <td>Lunch</td>
            <td>Lab</td>
          </tr>
          <tr>
            <td>Wednesday</td>
            <td>CN</td>
            <td>OS</td>
            <td>Maths</td>
            <td>Lunch</td>
            <td>DBMS</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Timetable;
