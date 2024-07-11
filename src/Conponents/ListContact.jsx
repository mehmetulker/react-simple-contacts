import React, { useState } from "react";

function ListContact({ contacts }) {
  const [filterText, setFilterText] = useState("");

  const filterted = contacts.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]
        .toString()
        .toLowerCase()
        .includes(filterText.toLocaleLowerCase())
    );
  });

  return (
    <div>
      <input
        placeholder="Filter contact"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />
      <ul className="list">
        {filterted.map((item, index) => (
          <li key={index}>
            <span> {item.fullName}</span>
            <span> {item.phoneNumber}</span>
          </li>
        ))}
      </ul>
      <p>Total contaacts ({filterted.length})</p>
    </div>
  );
}

export default ListContact;
