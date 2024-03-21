/* eslint-disable react/prop-types */
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaTrash } from "react-icons/fa6";

export const ContactItem = ({ data: { id, name, lastName, email, phone }, handleDelete }) => {


  return (
    <>
      <div
        className="w-full h-14 msm:h-auto bg-zinc-100 flex lg:flex-row msm:flex-col lg:justify-center items-center rounded-md lg:gap-12 xl:gap-32 msm:gap-y-2 msm:py-2"
        key={id}
      >
        <p className=" lg:pl-4 basis-1/5 msm:pl-0">
          {name} {lastName}
        </p>
        <p className="flex flex-row items-center basis-1/4 gap-1">
          <span>
            <MdEmail className="text-indigo-700" />
          </span>
          {email}
        </p>
        <p className="flex flex-row items-center basis-1/4 gap-1">
          <span>
            <FaPhoneAlt className="text-indigo-700" />
          </span>
          {phone}
        </p>
        <button className="lg:pr-8 w-5 msm:pr-0" >
          <FaTrash className="text-indigo-700 hover:text-xl" onClick={() => handleDelete(id)}/>
        </button>
      </div>
    </>
  );
};
