import ContactItem from 'components/ContactItem/ContactItem';
import { useSelector } from "react-redux";
import { useGetContactsQuery } from 'redux/contactsSlice';

const ContactsList = () => {
  const { data } = useGetContactsQuery();
  const filter = useSelector(state => state.filter);

  const getFilteredContacts = () => {
      return data.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
    };

  return <ul>
        {data && getFilteredContacts().map(({ id, name, phone }) => <ContactItem key={id} id={id} name={name} phone={phone} />)}
    </ul>
}

export default ContactsList;

