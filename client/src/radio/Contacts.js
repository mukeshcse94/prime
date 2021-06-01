import React, { Fragment, useContext, useEffect } from 'react';
import ContactItem from './ContactItem';
import { GlobalContext } from './ContactState';

const Contacts = () => {
  const contactContext = useContext(GlobalContext);

  const { contacts, getContacts, loading } = contactContext;

  useEffect(() => {
    getContacts();
  }, []);

  if (contacts !== null && contacts.length === 0 && !loading) {
    return contacts;
  }

  return (
    <Fragment>
      {contacts !== null && !loading ? (
        <div>
          {contacts.map(contact => (
            <ContactItem contact={contact} />
          ))}
        </div>
      ) : (
        "null"
      )}
    </Fragment>
  );
};

export default Contacts;
