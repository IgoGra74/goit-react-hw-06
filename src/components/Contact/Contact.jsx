import css from "./Contact.module.css";
import { BsPersonFill } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";

const Contact = ({ data, onDeleteContact }) => {
  const { name, number, id } = data;

  return (
    <div className={css.contact}>
      <div>
        <p className={css.textName}>
          <span> </span>
          <BsPersonFill className={css.icon} />
          {name}
        </p>
        <p className={css.textNumber}>
          <BsFillTelephoneFill className={css.icon} />
          {number}
        </p>
      </div>
      <button className={css.delete} onClick={() => onDeleteContact(id)}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
