import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import MainLayout from "../../layout/MainLayout";
import SocialLogin from "./SocialLogin";
import toast from "react-hot-toast";

const Login = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const from = location?.state?.from?.pathname || "/";
  console.log(from);
  // login with email and pass
  const handleLogin = (e) => {
    e.preventDefault();
    setErrorMessage("");

    const email = e.target.email.value;
    const password = e.target.password.value;

    logInUser(email, password)
      .then((res) => {
        console.log(res.user);
        toast.success("successfully logged in");
        navigate(from);
      })
      .catch((error) => setErrorMessage(error.message));
  };
  return (
    <div className="hero py-10 lg:py-20 h-[770px] bg-[white]">
      <div className="hero-content  flex-col">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
          <div className="card-body">
            <form onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered focus:outline-none"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered focus:outline-none"
                />
              </div>
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
              <p className="text-red-700 ml-1 text-sm">{errorMessage}</p>
              <div className="form-control mt-6">
                <button className="btn bg-primary text-[white]">Login</button>
              </div>
            </form>
            <p className="text-center">
              Dont have account? Please{" "}
              <Link className="text-green-700 font-bold" to="/register">
                register
              </Link>
            </p>
            <hr className="w-[60%] mx-auto border" />
            <p className="text-center">or</p>
            <SocialLogin setErrorMessage={setErrorMessage} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
