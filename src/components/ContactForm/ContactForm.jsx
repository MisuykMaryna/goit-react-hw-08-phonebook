import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/operations';
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
 const includeName = newContact => {
    return contacts.find(({ name }) => name === newContact);
  }

const handleSubmit = e => {
    e.preventDefault();
  if (includeName(name)) {
    alert(`${name} is already in contacts`);
    return;
  }
  dispatch(addContact({ name, number }));
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
    


