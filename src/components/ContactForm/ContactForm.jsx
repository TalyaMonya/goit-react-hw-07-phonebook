import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { StyledForm, Label, DivLabel, Error, FieldFormik, StyledButton } from './ContactForm.styled';
import { FaUserSecret } from 'react-icons/fa';
import { BsTelephone } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';

import { addContacts } from 'redux/contactsSlice';
import { getContacts } from 'redux/selectors';


import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toastifyOptions } from 'utils/toastifyOptions';


const Schema = Yup.object().shape({
  name: Yup
    .string()
    .min(2)
    .trim()
    .required(),
  number: Yup
    .string()
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required(),
});

const initialValues = { name: '', number: '' };


export const ContactForm = () => {
    const contacts = useSelector(getContacts);
    const dispatch = useDispatch();

    const isDublicate = ({ name, number }) => {
        const normalizedName = name.toLowerCase().trim();
        const normalizedNumber = number.trim();

        const dublicate = contacts.find(
            contact =>
                contact.name.toLowerCase().trim() === normalizedName ||
                contact.number.trim() === normalizedNumber
        );
        return Boolean(dublicate);
    };

    const onAddContact = ({ name, number }) => {
        if (isDublicate({ name, number })) {
            return toast.error(
                `This contact is already in contacts`,
                toastifyOptions
            );
        }
        dispatch(addContacts({ name, number }));
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
                    <FieldFormik type="tel" name="number" placeholder="Введіть номер" />
                    <Error><ErrorMessage name="number"/></Error>
                </Label>

                <StyledButton type="submit">Add contact</StyledButton>
            </StyledForm>
    </Formik> 
    )
}


