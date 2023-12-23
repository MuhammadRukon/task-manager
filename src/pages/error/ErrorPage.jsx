import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen w-full">
      <Link
        to="/"
        className="btn bg-primary text-[#FFF] hover:border hover:border-primary hover:bg-[white] hover:text-primary"
      >
        Go Home
      </Link>
    </div>
  );
};

export default ErrorPage;
