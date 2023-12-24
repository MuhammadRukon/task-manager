import { AiFillGoogleCircle } from "react-icons/ai";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";

const SocialLogin = ({ setErrorMessage }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const from = location?.state?.from?.pathname || "/";
  const { googleSignIn } = useAuth();

  const handleLoginWithGoogle = () => {
    console.log("clicked");
    setErrorMessage("");
    googleSignIn()
      .then((res) => {
        const email = res.user.email;
        console.log(email);
        toast.success("successfully logged in");
        navigate(from);
      })
      .catch((error) => setErrorMessage(error.message));
  };
  return (
    <>
      <div
        onClick={handleLoginWithGoogle}
        className="mx-auto  text-4xl cursor-pointer"
      >
        <AiFillGoogleCircle />
      </div>
    </>
  );
};

export default SocialLogin;
