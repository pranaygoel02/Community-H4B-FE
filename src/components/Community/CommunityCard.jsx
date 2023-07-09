import React from "react";
import { FiUpload } from "react-icons/fi";
import { Link } from "react-router-dom";

function CommunityCard({ socialLinks, image, title, description, categories }) {
  return (
    <div className="px-0 py-5 md:p-5 border-b-2 first:border-t-2 border-black w-full grid md:grid-cols-3 lg:grid-cols-5 flex-row items-center gap-5">
      <img
        className="w-full object-cover md:w-full h-full md:h-full lg:col-span-1  "
        src={image}
      />
      <div className="md:col-span-2 lg:col-span-3 space-y-2">
        <p className="flex flex-row justify-start items-center font-bold">
          {title}&nbsp;
          <FiUpload className="cursor-pointer" />
        </p>
        <p className="line-clamp-3">
          {description}
        </p>
        <p>
          <b>Categories:&nbsp;</b>
          <span>{categories.join(', ')}</span>
        </p>
      </div>
      <div className="flex flex-col-reverse xs:flex-row-reverse flex-wrap lg:flex-col items-center lg:items-end gap-y-5 md:col-span-3 lg:col-span-1 h-full justify-between">
        <button className="btn-small flex items-start w-32">Join Now</button>
        <div className="flex flex-row  justify-between  w-32 ">
          {socialLinks.map((obj, id) => (
            <Link
              to=""
              className=" flex  justify-between items-center"
              key={id}
            >
              {obj.icon}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CommunityCard;
