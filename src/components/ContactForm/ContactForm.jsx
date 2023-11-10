import { Formik, ErrorMessage } from 'formik';
import { StyledForm, Label, DivLabel, Error, FieldFormik, StyledButton } from './ContactForm.styled';
import { FaUserSecret } from 'react-icons/fa';
import { BsTelephone } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { addContacts } from 'redux/operations';
import { Schema } from './schemaYap';
import { selectContacts } from 'redux/selectors';


const initialValues = { name: '', phone: '' };


export const ContactForm = () => {
    const contacts = useSelector(selectContacts);
    const dispatch = useDispatch();


    const onAddContact = ({ name, phone }) => {
        const isInContacts = contacts.some(
        contact => contact.name.toLowerCase().trim() === name.toLowerCase().trim());
        // Перевіряє, чи існує контакт із таким самим ім'ям у списку контактів. Якщо контакт вже існує, виводиться попередження.
        if (isInContacts) {
            alert(`${name} is already in contacts`);
        return;
         }
        dispatch(addContacts({ name, phone }));
    };

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={(values, { resetForm }) => {
                onAddContact({ ...values });
                resetForm();
            }}
            validationSchema={Schema}
            >
            <StyledForm>
                <Label >
                    <DivLabel><FaUserSecret/>Name</DivLabel>
                    <FieldFormik name="name" placeholder="Введіть імʼя" />
                    <Error><ErrorMessage name="name"/></Error>
                </Label>

                <Label>
                    <DivLabel><BsTelephone/>Number</DivLabel>
                    <FieldFormik type="tel" name="phone" placeholder="Введіть номер" />
                    <Error><ErrorMessage name="phone"/></Error>
                </Label>

                <StyledButton type="submit">Add contact</StyledButton>
            </StyledForm>
    </Formik> 
    )
}


