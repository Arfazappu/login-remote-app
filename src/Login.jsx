import React, { useState } from "react";
import supabase from "../supabase";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error } = isLogin
      ? await supabase.auth.signInWithPassword({ email, password })
      : await supabase.auth.signUp({ email, password });

    if (error) {
      alert(error.message);
    } else {
      alert("Success! Redirecting...");
      window.location.href = "/dashboard";
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: 8, maxWidth:'300px', alignItems:'center', margin:'auto' }}
      >
        <h3>{isLogin ? "Login" : "Register"}</h3>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button type="submit">{isLogin ? "Login" : "Register"}</button>
        <p onClick={() => setIsLogin(!isLogin)} style={{ cursor: "pointer" }}>
          {isLogin ? `No account? Create one` : "Already have account? Login"}
        </p>
      </form>
    </div>
  );
}

export default Login;
