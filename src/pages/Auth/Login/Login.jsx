import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

import LoginLogic from "../../../logic/login.logic";
import Input from "../../../components/Input/Input";

const Login = () => {
  const { inputs, signingin, loginUser } = LoginLogic();

  return (
    <form onSubmit={loginUser} className="">
      {inputs.map((input, index) => (
        <Input key={index} {...input} />
      ))}
      <button
        disabled={signingin}
        type="submit"
        className="w-full text-center text-white bg-primary h-[50px] font-grostek text-xl rounded-sm my-5"
      >
        {signingin ? "Signing in...." : "Sign In"}
      </button>
      <div className="text-center items-center flex flex-row justify-center">
        <p>Login with:&nbsp;</p>
        <button>
          <FcGoogle className="w-[30px] h-[30px]" />
        </button>
        &nbsp;
        <button>
          <FaGithub className="w-[27px] h-[27px]" />
        </button>
      </div>
    </form>
  );
};

export default Login;
