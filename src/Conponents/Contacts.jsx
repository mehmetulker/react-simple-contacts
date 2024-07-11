import React, { useEffect, useState } from "react";
import ListContact from "./ListContact";
import FormContact from "./FormContact";

function Contacts() {
  const [contacts, setContacts] = useState([
    { fullName: "Mehmet", phoneNumber: 123456789 },
    { fullName: "Ayşe", phoneNumber: 123456789 },
    { fullName: "Mustafa", phoneNumber: 123456789 },
    { fullName: "Fatma", phoneNumber: 45678910 },
  ]);
  useEffect(() => {
    console.log(contacts);
  }, [contacts]);

  return (
    <div>
      <ListContact contacts={contacts} />
      <FormContact addContact={setContacts} contacts={contacts} />
    </div>
  );
}

export default Contacts;
