import React from "react";
import { useSelector } from "react-redux";
import { getContacts } from "redux/selectors";

import { Layout, Title, SubTitle, Empty } from "./Layout";
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from './ContactList/ContactList';
import { Filter } from "./Filter/Filter";
import { ToastContainer } from "react-toastify";

export const App = () => {
  const contacts = useSelector(getContacts)

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
        {contacts.length > 0 && (
          <ContactList />
        )}
        <ToastContainer/>
      </Layout>
    )
  }

