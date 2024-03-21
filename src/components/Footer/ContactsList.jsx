/* eslint-disable react/prop-types */

import { ContactItem } from "./ContactItem";

export const ContactsList = ({ contacts, handleDelete}) => {
  return (
    <>
      <div className="w-full h-full flex justify-center">
        <div className="w-3/5 flex flex-col items-start justify-center my-16">
          <h1 className="text-indigo-700 font-bold text-2xl">Contacts List</h1>
          {contacts.length === 0 ? (
            <h4 className="w-full h-20  rounded-md bg-zinc-100 flex justify-center items-center mt-5">
              {" "}
              No Contacts Yet
            </h4>
          ) : (
            <div
              className={`w-full h-full border rounded-md bg-white flex flex-col justify-center items-center mt-5 p-5 gap-y-5`}
            >
              {contacts.map((contact) => (
                <ContactItem key={contact.id} data={contact} handleDelete={handleDelete}/>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};
