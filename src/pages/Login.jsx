function Login({ onLogin }) {
  return (
    <div className="login">
      <div className="login-card">
        <h2>🎓 Student Login</h2>

        {/* Dummy inputs – logic later */}
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />

        <button onClick={onLogin}>Login</button>

        <p style={{ marginTop: "10px", fontSize: "13px", opacity: 0.7 }}>
          * Login logic will be added later
        </p>
      </div>
    </div>
  );
}

export default Login;
