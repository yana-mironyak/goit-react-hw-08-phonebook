import css from './App.module.css';
import ContactsForm from "./ContactsForm/ContactsForm";
import ContactsList from "components/ContactsList/ContactsList";
import Filter from 'components/Filter/Filter';

const App = () => {
  return (
    <div className={css.container}>
      <h1 className={css.mainTitle}>Phonebook</h1>
      <ContactsForm />
      <h2 className={css.title}>Contacts</h2>
      <Filter />
      <ContactsList />
    </div>
  )
}

export default App;