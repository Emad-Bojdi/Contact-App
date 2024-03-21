import { useState } from "react";
import { ContactsList } from "../Footer/ContactsList";
import { Inputs1, Inputs2 } from "../../constanses/inputs";
import { v4 } from "uuid";
export const AddContact = () => {
  const [alert, setAlert] = useState("");
  const [contacts, setContacts] = useState([]);
  const [contact, setContact] = useState({
    id:"",
    name: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const changeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setContact((contact) => ({ ...contact, [name]: value }));
  };
  const addHandler = (e) => {
    e.preventDefault();
    if (
      !contact.name ||
      !contact.lastName ||
      !contact.email ||
      !contact.phone
    ) {
      setAlert("Please enter valid data!!");
      return;
    }
    setAlert("");
    const newContact = {...contact,id:v4}
    setContacts((contacts) => [...contacts, newContact]);
    console.log(contacts);
    setContact({
      name: "",
      lastName: "",
      email: "",
      phone: "",
    });

  };
  const handleDelete = (id) => {
    const newContacts = contacts.filter(contact => contact.id !== id)
    setContacts(newContacts);
  }
  return (
    <>
      <div className="w-full h-full flex flex-col justify-center items-center">
        <form className="w-3/5 h-full shadow-xl flex flex-col items-center border-opacity-0 rounded-lg">
          <div className="w-4/5 flex lg:flex-row justify-center mt-4 msm:flex-col">
            <div className="w-full flex flex-col items-center m-2">
              {Inputs1.map((input, index) => (
                <input
                  key={index}
                  type={input.type}
                  placeholder={input.placeHolder}
                  name={input.name}
                  value={contact[input.name]}
                  className={input.className}
                  onChange={changeHandler}
                />
              ))}
            </div>
            <div className="w-full flex flex-col items-center m-2 ">
              {Inputs2.map((input, index) => (
                <input
                  key={index}
                  type={input.type}
                  placeholder={input.placeHolder}
                  name={input.name}
                  value={contact[input.name]}
                  className={input.className}
                  onChange={changeHandler}
                />
              ))}
            </div>
          </div>
          <div className=" w-4/5 h-10 bg-indigo-700 text-center flex items-center justify-center mt-2 mb-5 border rounded-md">
            <button
              type="submit"
              className="text-white font-semibold"
              onClick={addHandler}
            >
              Add Contact
            </button>
          </div>
        </form>
        {alert ? (
          <div className="w-3/5 flex flex-row justify-start border bg-rose-400 border-rose-400 rounded-md mt-4">
            {<p className="font-semibold text-md text-red-800  pl-2">{alert}</p>}
          </div>
        ) : (
          ""
        )}
        <div className="w-full h-full ">
          <ContactsList contacts={contacts} handleDelete={handleDelete}/>
        </div>
      </div>
    </>
  );
};
