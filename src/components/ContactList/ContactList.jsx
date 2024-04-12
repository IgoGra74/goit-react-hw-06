import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <div>
      <ul className={css.contactList}>
        {contacts.map((contact) => (
          <li className={css.contactListItem} key={contact.id}>
            <Contact data={contact} onDeleteContact={onDeleteContact} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
