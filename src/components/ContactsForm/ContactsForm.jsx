import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import css from '../ContactsForm/ContactsForm.module.css';
import { useAddContactMutation, useGetContactsQuery } from 'redux/contactsSlice';

const phoneRegExp = /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;

const schema = yup.object().shape({
  name: yup.string().min(2, 'Your name is too short').required(),
  phone: yup.string().matches(phoneRegExp, 'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +').required(),
})

const ContactsForm = () => {
    const [addContact] = useAddContactMutation();
    const { data } = useGetContactsQuery();

    const handleSubmit = async ({name, phone}, {resetForm}) => {
        try {
            const contactsMatch = data.find(contact => contact.name.toLowerCase() === name.toLowerCase());
            if (contactsMatch) {
                alert(`${name} is already in contacts`);
            } else {
                await addContact({ name, phone });
            }
            resetForm();
        } catch (error) { alert('Error') }   
    }

    return <Formik initialValues={{name: '', phone: ''}} validationSchema={schema} onSubmit={handleSubmit}>
        <Form autoComplete='on'>
        <label className={css.contact} htmlFor='name'>
            Name
            <Field className={css.contactInput}type='text' name='name'/>
            <ErrorMessage className={css.contactError} name='name' component='div'/>
        </label>
        <label className={css.contact} htmlFor='phone'>
            Number
            <Field className={css.contactInput}type="tel" name="phone"/>
            <ErrorMessage className={css.contactError} name='phone' component='div'/>
        </label>
        <button type='submit' className={css.contactButton}>Add contact</button>
        </Form>
    </Formik>
}

export default ContactsForm;


