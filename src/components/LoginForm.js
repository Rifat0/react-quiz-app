import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Button from "./Button";
import Form from "./Form";
import TextInput from "./TextInput";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState();
  const [loding, setLoding] = useState();

  const { login } = useAuth();
  const navigate = useNavigate();

  async function handelSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoding(true);
      await login(email, password);
      navigate("/");
    } catch (err) {
      console.log(err);
      setLoding(false);
      setError("Failed to login");
    }
  }

  return (
    <Form className={{ height: `330px` }} onSubmit={handelSubmit}>
      <TextInput
        type="text"
        placeholder="Enter email"
        icon="alternate_email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <TextInput
        type="password"
        placeholder="Enter password"
        icon="lock"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <Button type="submit" disabled={loding}>
        <span>Submit now</span>
      </Button>
      {error && <p className="error">{error}</p>}
      <div className="info">
        Don't have an account? <Link to="/singup">Signup</Link> instead.
      </div>
    </Form>
  );
}
