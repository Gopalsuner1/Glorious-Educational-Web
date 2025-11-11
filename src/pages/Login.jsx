import { useState } from "react";
import { useLoginMutation } from "../features/auth/authApi";
import { useDispatch } from "react-redux";
import { setCredentials } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({ email: "", password: "" });

  const submit = async (e) => {
    e.preventDefault();
    const res = await login(form).unwrap();
    dispatch(setCredentials(res));
    navigate("/dashboard");
  };

  return (
    <form onSubmit={submit}>
      <input type="email" placeholder="Email" 
        onChange={(e)=>setForm({...form,email:e.target.value})}/>
      <input type="password" placeholder="Password" 
        onChange={(e)=>setForm({...form,password:e.target.value})}/>
      <button disabled={isLoading}>Login</button>
    </form>
  );
}
