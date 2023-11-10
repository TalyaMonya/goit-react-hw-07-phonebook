import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectContacts, selectError, selectIsLoading } from "redux/selectors";

import { Layout, Title, SubTitle, Empty } from "./Layout";
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from './ContactList/ContactList';
import { Filter } from "./Filter/Filter";
import { ToastContainer } from "react-toastify";
import { fetchContacts } from "redux/operations";
import { Loader } from "utils/loader";

export const App = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

    return (
      <Layout>
        <Title>Your Phonebook</Title>
        <ContactForm />
        <SubTitle>Contacts</SubTitle>
        {contacts.length > 0 ? (
          <Filter />
        ) : (
            <Empty>Your phonebook is empty. Add first contact!</Empty>
        )}

        {isLoading && !error && !contacts.length && (<Loader/>) } 
        {contacts.length > 0 && (<ContactList />)}
        <ToastContainer/>
      </Layout>
    )
  }

