import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { dispatch } = useAuth();

  const handleLogin = () => {
    dispatch({ type: "LOGIN" });
    navigate("/dashboard");
  };

  return (
    <div>
      <h1>Login Page</h1>
      <button  onClick={handleLogin}>Log In</button>
    </div>
  );
};

export default Login;
