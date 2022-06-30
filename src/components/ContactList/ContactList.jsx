// import PropTypes from 'prop-types';
// import styles from '../Form/Form.module.css';
// import Contact from '../ContactElementList/ContactElementList';

// export const ContactList = ({ contacts, handleRemove }) => {
//   return (
//     <div className={styles.wrap}>
//       {contacts.length
//         ? contacts.map(({ id, name, number }) => (
//             <Contact
//               key={id}
//               id={id}
//               name={name}
//               number={number}
//               handleRemove={handleRemove}
//             />
//           ))
//         : 'No contacts'}
//     </div>
//   );
// };

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ),
//   handleRemove: PropTypes.func.isRequired,
// };

// export default ContactList;

import { useSelector } from 'react-redux';
import Contact from '../ContactElementList/ContactElementList';
import styles from '../Form/Form.module.css';

const getContacts = (items, filter) =>
  items.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

export const ContactList = () => {
  const items = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);
  const contacts = getContacts(items, filter);
  return (
    <ul className={styles.wrap}>
      {contacts.length
        ? contacts.map(({ id, name, number }) => (
            <Contact key={id} id={id} name={name} number={number} />
          ))
        : 'No contacts'}
    </ul>
  );
};
export default ContactList;
