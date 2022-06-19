import { useState, useEffect } from 'react';
import Form from './Form/Form';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import styles from './Form/Form.module.css';
import Notiflix from 'notiflix';

const defaultContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(window.localStorage.getItem('Contacts')) ?? defaultContacts
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('Contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContacts = ({ id, name, number }) => {
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    )
      return Notiflix.Notify.failure(`${name} is already in phonebook`);
    setContacts([...contacts, { id, name, number }]);
  };

  const getContacts = () => {
    const filterNormalize = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterNormalize)
    );
  };

  const deleteContacts = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const changeFilter = element => {
    setFilter(element.currentTarget.value);
  };

  return (
    <div className={styles.wrap}>
      <h1>Phonebook</h1>
      <Form onSubmitData={addContacts} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList contacts={getContacts()} handleRemove={deleteContacts} />
    </div>
  );
};
