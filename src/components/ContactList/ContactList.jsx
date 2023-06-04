
import { useSelector } from 'react-redux';
import css from './ContactList.module.css';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { selectVisibleContacts } from 'redux/contacts/selectors';


export const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);
  
  return (
    <ul className={css.contactList}>
      {contacts &&
        contacts.map(({ id, name,  number, onClick }) => (
          <ContactItem key={id}
          id={id}
          name={name}
          number={  number }
          onClick={() => onClick(id)} />
        ))}
    </ul>
  );
};

