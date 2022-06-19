import PropTypes from 'prop-types';
import styles from '../Form/Form.module.css';

export const Contact = ({ id, name, number, handleRemove }) => {
  return (
    <li id={id} className={styles.item}>
      {name}: {number}
      <button className={styles.button} onClick={() => handleRemove(id)}>
        Delete
      </button>
    </li>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  handleRemove: PropTypes.func.isRequired,
};

export default Contact;
