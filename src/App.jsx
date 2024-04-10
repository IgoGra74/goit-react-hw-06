import { useState, useEffect } from "react";
// import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import initialContacts from "./components/contacts.json";
import css from "./App.module.css";

function App() {
  const [contacts, setContacts] = useState(() => {
    const storedContacts = localStorage.getItem("contacts");
    return storedContacts ? JSON.parse(storedContacts) : initialContacts;
  });

  const [search, setSearch] = useState("");

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (newContact) => {
    setContacts((prevContacts) => {
      return [...prevContacts, newContact];
    });
  };

  const deleteContact = (contactId) => {
    setContacts((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== contactId);
    });
  };

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <>
      <div>
        <h1 className={css.title}>Phonebook</h1>
        <ContactForm addContact={addContact} />
        <SearchBox search={search} setSearch={setSearch} />
        <ContactList contacts={visibleContacts} deleteContact={deleteContact} />
      </div>
    </>
  );
}

export default App;
