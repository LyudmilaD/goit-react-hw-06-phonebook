import { useState } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import styles from './Form.module.css';

export const Form = ({ onSubmitData }) => {
  const [form, setForm] = useState({ name: '', number: '' });

  Form.propTypes = {
    onSubmitData: PropTypes.func.isRequired,
  };

  const handleChange = element => {
    const { name, value } = element.currentTarget;
    setForm(prevForm => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = element => {
    element.preventDefault();
    const data = {
      id: nanoid(),
      ...form,
    };
    onSubmitData(data);
    inputClean();
  };

  const inputClean = () => {
    setForm({ name: '', number: '' });
  };

  const { name, number } = form;
  return (
    <div className={styles.form}>
      <form onSubmit={handleSubmit}>
        <label className={styles.formlabel}>
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
