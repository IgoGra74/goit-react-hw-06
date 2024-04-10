import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <div>
      <ul className={css.contactList}>
        {contacts.map((contact) => (
          <li className={css.contactListItem} key={contact.id}>
            <Contact data={contact} deleteContact={deleteContact} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
