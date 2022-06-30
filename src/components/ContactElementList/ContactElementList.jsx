import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'contactStorage/contactSlice';

import styles from '../Form/Form.module.css';

export const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const deleteContacts = id => dispatch(deleteContact(id));

  return (
    <li id={id} className={styles.item}>
      {name}: {number}
      <button className={styles.button} onClick={() => deleteContacts(id)}>
        Delete
      </button>
    </li>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
export default Contact;
