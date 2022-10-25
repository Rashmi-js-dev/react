import React from "react";
import ContactCard from "./ContactCard";
import { Link } from "react-router-dom";

const ContactList = (props) => {
  console.log(props);
  const deleteContactHandler = (id) => {
    props.getContactId(id);
  };
  const contacts = [
    {
      id: "1",
      name: "Rashmi",
      email: "abc@gmail.com",
    },
  ];
  const renderContactList = contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        clickHandler={deleteContactHandler}
        key={contact.id}
      />
    );
  });
  return (
    <div style={{ margin: "50px 0 20px 0" }} className="ui celled list">
      <h2
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        Contact List
        <Link to="/add">
          <button className="ui button blue right">Add Contact</button>
        </Link>
      </h2>
      {renderContactList}
    </div>
  );
};

export default ContactList;
