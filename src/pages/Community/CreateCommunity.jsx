import {useRef} from "react";
import CreateCommunityLogic from "../../logic/create-community.logic";
import { BiCamera, BiSolidUserCircle } from "react-icons/bi";
import Input from "../../components/Input/Input";
import { MdAddCircle, MdRemoveCircle } from "react-icons/md";

function CreateCommunity() {
  const {  inputs, imagePreview, handleImage, communityInfo, signingup, addNewSocialField, removeSocialField, submitUpdateForm, socials } =
    CreateCommunityLogic();

    const fileRef = useRef(null);

  return (
    <section className="container-padding space-y-8">
        <h1 className="text-3xl font-bold -mt-8">Create Community</h1>
      <div className="relative md:w-[50vh]">
        {imagePreview || communityInfo?.image ? (
          <img
            src={communityInfo?.image || imagePreview}
            className="w-full h-full bg-accent rounded-lg"
          />
        ) : (
          <div className="w-full h-[25vh] bg-accent rounded-lg"></div>
        )}
        <input
          onChange={handleImage}
          className="hidden"
          ref={fileRef}
          type="file"
        />
        <button
          onClick={(e) => {
            fileRef.current.click();
          }}
          className="absolute top-4 right-4 bg-black text-white p-2 text-xl rounded-lg"
        >
          <BiCamera />
        </button>
      </div>
      <form onSubmit={submitUpdateForm} className="flex flex-col md:grid md:grid-cols-2 gap-8 w-full">
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
          {signingup ? "Creating..." : "Create Community"}
        </button>
      </form>
      <div></div>
      <div></div>
    </section>
  );
}

export default CreateCommunity;
