import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { PhoneBook } from './App.styled';

const CONTACTS = 'contacts';

export const App = () => {
  const [contacts, setContacts] = useState(() => getInitContacts() || []);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const contactsForLocal = JSON.stringify(contacts);
    window.localStorage.setItem(CONTACTS, contactsForLocal);
  }, [contacts]);

  function getInitContacts() {
    const contactsFromLocal = localStorage.getItem(CONTACTS);
    if (contactsFromLocal) {
      return JSON.parse(contactsFromLocal);
    }
  }

  const addContact = formData => {
    const alreadyExist = contacts.some(
      el => el.name.toLowerCase() === formData.name.toLowerCase()
    );

    if (alreadyExist) return alert(`${formData.name} is already in contacts.`);
    const newContact = { id: nanoid(), ...formData };
    setContacts(prev => [newContact, ...prev]);
  };

  const deleteContact = id => {
    setContacts(prev => {
      const newContactsList = prev.filter(el => el.id !== id);
      return newContactsList;
    });
  };

  const filteredContacts = () => {
    return contacts.filter(el =>
      el.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <PhoneBook>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />

      <h2>Contacts</h2>
      <Filter
        handleFilter={e => {
          setFilter(e.target.value);
        }}
      />
      {contacts && (
        <ContactList
          contacts={filteredContacts()}
          deleteContact={deleteContact}
        />
      )}
    </PhoneBook>
  );
};
