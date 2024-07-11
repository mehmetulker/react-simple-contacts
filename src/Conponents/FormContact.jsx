import React, { useState, addContact, useEffect } from "react";

function FormContact({ addContact, contacts }) {
  const [form, setForm] = useState({ fullName: "", phoneNumber: "" });
  // useEffect(() => {
  //   setForm({ fullName: "", phoneNumber: "" });
  // }, [contacts]);

  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });

    // console.log(form);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (form.fullName === "" || form.phoneNumber === "") {
      return false;
    }

    addContact([...contacts, form]);
    //  addContact((prevState)=[...prevState,form]);
    setForm({ fullName: "", phoneNumber: "" });
  };
  return (
    <div className="form">
      <div>Form</div>
      <form onSubmit={onSubmit}>
        <div className="input">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={form.fullName}
            onChange={onChangeInput}
          />
        </div>
        <div className="input">
          <input
            type="text"
            name="phoneNumber"
            placeholder="Phone Number"
            value={form.phoneNumber}
            onChange={onChangeInput}
          />
        </div>

        <button>Add</button>
      </form>
    </div>
  );
}

export default FormContact;
