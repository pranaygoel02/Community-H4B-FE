import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import SignupLogic from "../../../logic/signup.logic";
import Input from "../../../components/Input/Input";

const Signup = ({ setState }) => {
  const {
    inputs,
    signingup,
    signUpUser,
  } = SignupLogic();

  return (
    <form onSubmit={signUpUser}>
      {inputs.map((input, index) => (
        <Input key={index} {...input} />
      ))}
          <button disabled={signingup} type="submit" className="w-full text-center text-white bg-primary h-[50px] font-grostek text-xl rounded-sm my-5">
        {signingup ? 'Signing up....' : 'Sign Up'}
      </button>
      {/* <p className="text-center font-bold ">OR</p>
      <button className="flex flex-row items-center w-full h-[50px]  input-div mt-3 mb-5">
        <FcGoogle />
        &nbsp;<span>Continue with Google</span>
      </button>
      <p className="text-center font-bold ">OR</p>
      <button className="flex flex-row items-center w-full h-[50px]  input-div mt-3 mb-5">
        <FaGithub />
        &nbsp;<span>Continue with Github</span>
      </button> */}
  
      <p>
        Already Have an Account?{" "}
        <button
          onClick={(e) => {
            e.preventDefault();
            setState("Login");
          }}
        >
          Login Here
        </button>
      </p>
    </form>
  );
};

export default Signup;
