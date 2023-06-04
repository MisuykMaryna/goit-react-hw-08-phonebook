import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/operations';
import Notiflix from 'notiflix';
import css from './ContactForm.module.css';


export const ContactForm = () => { 
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handelChange = e => {
    const { value, name } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

const handleSubmit = e => {
  e.preventDefault();

  if (contacts.find(el => el.name.toLowerCase() === name.toLowerCase())) {
      return  Notiflix.Notify.warning(`${name} is already in contacts.`);
    } else if (
      contacts.find(el => el.number.toLowerCase() === number.toLowerCase())
    ) {
      return  Notiflix.Notify.warning(`${number} is already in contacts.`);
    }

    const newContact = {
      name,
      number,
    };
  dispatch(addContact(newContact));
    reset();
  };

   const reset = () => {
     setName('');
     setNumber('');
     
  };
  
    return (
        <form className={css.contactForm} onSubmit={handleSubmit}>
          <label className={css.contactForm__label}>Name<input
  className={css.contactForm__input}
  onChange={handelChange}
  type="text"
  name="name"
  value={name}
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  placeholder='Name'
  required
        /></label>
          <label className={css.contactForm__label}>Number<input
  className={css.contactForm__input}
  onChange={handelChange}
  type="tel"
  name="number"
  value={number}
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  placeholder='Number: xxx-xxx-xxxx'
  required
/></label>
        
        <button className={css.contactForm__button} type="submit">Add contact</button>
        </form>
    );
  }
    


