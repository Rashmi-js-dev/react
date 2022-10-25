import React, { useState, useEffect } from "react";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import "./App.css";
import { v4 as uuid } from "uuid";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? []
  );
  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, { id: uuid(), ...contact }]);
  };
  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList);
  };

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="ui container">
      <Router>
        <Header />
        <Switch>
          <Route path="/add" component={AddContact} />
          <Route path="/" exact component={ContactList} />
        </Switch>
        {/* <AddContact addContactHandler={addContactHandler} />*/}
        {/*<ContactList contacts={contacts} getContactId={removeContactHandler} />*/}
      </Router>
    </div>
  );
}

export default App;
