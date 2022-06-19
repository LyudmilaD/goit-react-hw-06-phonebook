import PropTypes from 'prop-types';
import styles from '../Form/Form.module.css';
export const Filter = ({ value, onChange }) => {
  return (
    <div className={styles.formLabel}>
      <h2>Find contacts by name</h2>
      <input className={styles.input} value={value} onChange={onChange} />
    </div>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
export default Filter;
