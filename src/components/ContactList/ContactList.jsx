import PropTypes from 'prop-types';
import styles from '../Form/Form.module.css';
import Contact from '../ContactElementList/ContactElementList';

export const ContactList = ({ contacts, handleRemove }) => {
  return (
    <div className={styles.wrap}>
      {contacts.length
        ? contacts.map(({ id, name, number }) => (
            <Contact
              key={id}
              id={id}
              name={name}
              number={number}
              handleRemove={handleRemove}
            />
          ))
        : 'No contacts'}
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  handleRemove: PropTypes.func.isRequired,
};

export default ContactList;
