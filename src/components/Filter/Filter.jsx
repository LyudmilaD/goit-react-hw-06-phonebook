// import PropTypes from 'prop-types';
// import styles from '../Form/Form.module.css';
// export const Filter = ({ value, onChange }) => {
//   return (
//     <div className={styles.formLabel}>
//       <h2>Find contacts by name</h2>
//       <input className={styles.input} value={value} onChange={onChange} />
//     </div>
//   );
// };

// Filter.propTypes = {
//   value: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };
// export default Filter;

import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from 'contactStorage/contactSlice';

import styles from '../Form/Form.module.css';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.contacts.filter);

  const onChange = element => {
    dispatch(changeFilter(element.currentTarget.value));
  };

  return (
    <div className={styles.formLabel}>
      <h2>Find contacts by name</h2>
      <input
        className={styles.input}
        onChange={onChange}
        value={filter}
      ></input>
    </div>
  );
};
export default Filter;
