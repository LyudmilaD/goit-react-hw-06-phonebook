import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addContacts } from 'contactStorage/contactSlice';
import { nanoid } from 'nanoid';
import Notiflix from 'notiflix';

import styles from './Form.module.css';

export const Form = () => {
  const [form, setForm] = useState({ name: '', number: '' });

  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);

  const handleChange = element => {
    const { name, value } = element.currentTarget;
    setForm(prevForm => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = element => {
    element.preventDefault();

    const data = { id: nanoid(), ...form };
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === data.name.toLowerCase()
      )
    ) {
      inputClean();
      return Notiflix.Notify.failure(`${data.name} is already in phonebook`);
    }

    dispatch(addContacts(data));

    inputClean();
  };

  const inputClean = () => {
    setForm({ name: '', number: '' });
  };

  const { name, number } = form;
  return (
    <div className={styles.section}>
      <form onSubmit={handleSubmit}>
        <label className={styles.formLabel}>
          Name
          <input
            className={styles.input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={handleChange}
          />
        </label>
        <label className={styles.formLabel}>
          Number
          <input
            className={styles.input}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={handleChange}
          />
        </label>
        <button type="submit" className={styles.button}>
          Add contact
        </button>
      </form>
    </div>
  );
};
export default Form;
