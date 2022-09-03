import ContactsForm from "components/ContactsForm/ContactsForm";
import ContactsList from "components/ContactsList/ContactsList";
import Filter from "components/Filter/Filter";

const ContactsView = () => {
    return (
        <>
            <Filter />
            <ContactsForm />
            <ContactsList />
        </>
    )
};

export default ContactsView;