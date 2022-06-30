import Form from '././components/Form/Form';
import ContactList from '././components/ContactList/ContactList';
import Filter from '././components/Filter/Filter';
import styles from '././components/Form/Form.module.css';
export const App = () => {
  return (
    <div className={styles.wrap}>
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};
