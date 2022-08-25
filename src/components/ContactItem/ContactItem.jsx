import PropTypes from 'prop-types';
import css from '../ContactItem/ContactItem.module.css';
import { useDeleteContactMutation } from 'redux/contactsSlice';

const ContactItem = ({ name, phone, id }) => {
    const [deleteContact, result] = useDeleteContactMutation();

    return <li className={css.contactItem}>{name}: {phone}
    <button type='button' className={css.deleteButton} onClick={()=>deleteContact(id)} disabled = {result.isLoading}>Delete</button></li>
}

export default ContactItem;

ContactItem.propTypes = {
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
}