import { useDispatch, useSelector } from "react-redux";
import { List, ListItem, Btn } from "./ContactList.styled";
import {RiDeleteBinLine} from 'react-icons/ri'
import { getContacts, getFilter } from "../../redux/selectors";
import { removeContact } from "redux/contactsSlice";
import { useMemo } from "react";


export const ContactList = () => {
    const contacts = useSelector(getContacts);
    const filter = useSelector(getFilter);

    const getVisibleContacts = useMemo(() => {
        const normalizedFilter = filter.toLowerCase();

        return contacts.filter(contact =>
             contact.name.toLowerCase().includes(normalizedFilter))
    }, [contacts, filter])

    const dispatch = useDispatch();
    const handleDelete = contactId => {
        dispatch(removeContact(contactId));
    }; 

    return (
        <List>
            {getVisibleContacts.map(({ name, number, id }) => {
                return (
                    <ListItem key={id}>
                        <span>{name}:</span>
                        <span>{number}</span>
                        <Btn
                        type="button"
                        name="delete"
                        onClick={() => handleDelete(id)}>
                        <RiDeleteBinLine size="14"/>
                    </Btn>
               </ListItem>
           )
       })}
    </List>
    ) 
}


