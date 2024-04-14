import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import css from "./App.module.css";
import { useSelector, useDispatch } from "react-redux";
import {
  addContact,
  deleteContact,
  selectContacts,
} from "./redux/contactsSlice";
import { changeFilter, selectNameFilter } from "./redux/filtersSlice";

function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const name = useSelector(selectNameFilter);

  const onAddContact = (newContact) => {
    dispatch(addContact(newContact));
  };

  const onDeleteContact = (contactId) => {
    dispatch(deleteContact(contactId));
  };

  const onFilterChange = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(name.toLowerCase())
  );

  return (
    <>
      <div>
        <h1 className={css.title}>Phonebook</h1>
        <ContactForm onAddContact={onAddContact} />
        <SearchBox name={name} onFilterChange={onFilterChange} />
        <ContactList
          contacts={visibleContacts}
          onDeleteContact={onDeleteContact}
        />
      </div>
    </>
  );
}

export default App;
