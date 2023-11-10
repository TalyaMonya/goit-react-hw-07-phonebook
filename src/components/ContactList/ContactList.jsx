import { useDispatch, useSelector } from "react-redux";
import { List, ListItem, Btn } from "./ContactList.styled";
import {RiDeleteBinLine} from 'react-icons/ri'
import { selectVisibleContacts } from "../../redux/selectors";
import { deleteContacts } from "redux/operations";



export const ContactList = () => {
    const contacts = useSelector(selectVisibleContacts);

    const dispatch = useDispatch();

   
    return (
        <List>
            {contacts.map(contact => {
                return (
                    <ListItem key={contact.id}>
                        <span>{contact.name}:</span>
                        <span>{contact.phone}</span>
                        <Btn
                        type="button"
                        name="delete"
                        onClick={() => dispatch(deleteContacts(contact.id))}>
                        <RiDeleteBinLine size="14"/>
                    </Btn>
               </ListItem>
           )
       })}
    </List>
    ) 
}


