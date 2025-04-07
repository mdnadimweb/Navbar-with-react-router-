import { useNavigate } from "react-router";

function Login() {
  const navigate = useNavigate();

  return (
    <>
      <button
        className="button"
        onClick={() => {
          navigate("/");
        }}
      >
        go to home{" "}
      </button>
    </>
  );
}

export default Login;
