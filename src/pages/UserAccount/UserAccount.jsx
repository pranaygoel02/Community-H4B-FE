import { useRef } from "react";
import UserAccountLogic from "../../logic/useraccount.logic";
import Input from "../../components/Input/Input";
import { BiCamera, BiSolidUserCircle } from "react-icons/bi";
import { MdAddCircle, MdRemoveCircle } from "react-icons/md";

function UserAccount() {
  const {
    inputs,
    addNewSocialField,
    socials,
    removeSocialField,
    signingup,
    submitUpdateForm,
    userInfo,
    logoutUser,
    handleImage,
    imagePreview,
  } = UserAccountLogic();

  const fileRef = useRef(null);

  return (
    <section className="container-padding">
      <div className="inline-flex flex-wrap justify-center items-center gap-8 mb-16 w-full">
        <div
          className="relative"
        >
          {imagePreview || userInfo?.image ? (
            <img
              src={userInfo?.image || imagePreview}
              className="w-32 h-32 md:w-52 md:h-52 aspect-square rounded-full text-black/20"
            />
          ) : (
            <BiSolidUserCircle className="w-32 h-32 md:w-52 md:h-52 aspect-square rounded-full text-black/20" />
          )}
          <input onChange={handleImage} className="hidden" ref={fileRef} type="file" />
          <button  onClick={(e) => {            
            fileRef.current.click();
          }} className="absolute bottom-4 left-[50%] -translate-x-[50%] bg-black text-white p-2 text-xl rounded-lg"><BiCamera/></button>
        </div>
        <div className="space-y-4 text-xl text-center md:text-left">
          <h2 className="font-bold md:text-2xl">{userInfo?.name}</h2>
          <p>{userInfo?.email}</p>
          <p>{userInfo?.phone}</p>
        </div>
        <button
          onClick={logoutUser}
          className="btn-small self-start md:ml-auto"
        >
          Logout
        </button>
      </div>
      <form onSubmit={submitUpdateForm} className="flex md:grid gap-8 w-full">
        {inputs.map((input, index) => (
          <Input key={index} {...input} />
        ))}
        {socials?.map((social, index) =>
          social.map((social, idx) => (
            <Input
              key={index + idx}
              {...social}
              name={`social-${index}-${idx}`}
            />
          ))
        )}
        <button
          disabled={signingup}
          onClick={addNewSocialField}
          className="input-div"
        >
          <span className="font-bold">Add Social</span>
          <MdAddCircle />
        </button>
        <button
          disabled={signingup}
          onClick={removeSocialField}
          className="input-div"
        >
          <span className="font-bold">Remove Social</span>
          <MdRemoveCircle />
        </button>
        <button
          disabled={signingup}
          type="submit"
          className="text-center text-white bg-primary h-[50px] font-grostek text-xl w-full md:col-span-2 md:w-[50%] self-center relative left-[50%] transform translate-x-[-50%] my-8"
        >
          {signingup ? "Saving...." : "Save Changes"}
        </button>
      </form>
      <div></div>
      <div></div>
    </section>
  );
}

export default UserAccount;
