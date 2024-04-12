import { useState } from "react";
// import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
// import initialContacts from "./components/contacts.json";
import css from "./App.module.css";
import { useSelector, useDispatch } from "react-redux";
import { addContact, deleteContact } from "./redux/contactsSlice";

function App() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.contacts.items);
  // const [contacts, setContacts] = useState(() => {
  //   const storedContacts = localStorage.getItem("contacts");
  //   return storedContacts ? JSON.parse(storedContacts) : initialContacts;
  // });

  const [search, setSearch] = useState("");

  // useEffect(() => {
  //   localStorage.setItem("contacts", JSON.stringify(contacts));
  // }, [contacts]);

  const onAddContact = (newContact) => {
    const finalContact = { ...newContact, newContact };
    dispatch(addContact(finalContact));
    // setContacts((prevContacts) => {
    //   return [...prevContacts, newContact];
    // });
  };

  const onDeleteContact = (contactId) => {
    dispatch(deleteContact(contactId));
    // setContacts((prevContacts) => {
    //   return prevContacts.filter((contact) => contact.id !== contactId);
    // });
  };

  const onVisibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <>
      <div>
        <h1 className={css.title}>Phonebook</h1>
        <ContactForm onAddContact={onAddContact} />
        <SearchBox search={search} setSearch={setSearch} />
        <ContactList
          contacts={onVisibleContacts}
          onDeleteContact={onDeleteContact}
        />
      </div>
    </>
  );
}

export default App;
