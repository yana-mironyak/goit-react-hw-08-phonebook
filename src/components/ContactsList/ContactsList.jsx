import css from '../ContactsList/ContactsList.module.css'
import ContactItem from 'components/ContactItem/ContactItem';
import { useSelector } from "react-redux";
import { useGetContactsQuery } from 'redux/contactsSlice';


const ContactsList = () => {
  const { data } = useGetContactsQuery();
  const filter = useSelector(state => state.filter);

  const getFilteredContacts = () => {
      return data.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
    };

  return <ul className={css.list}>
        {data && getFilteredContacts().map(({ id, name, number }) => <ContactItem key={id} id={id} name={name} number={number} />)}
    </ul>
}

export default ContactsList;

