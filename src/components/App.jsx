import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { PhoneBook } from './App.styled';

const CONTACTS = 'contacts';

// const oldContacts = [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];

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

// export class App extends Component {
//   state = {
//     contacts: [],
//     filter: '',
//   };

//   componentDidMount() {
//     const contactsFromLocal = localStorage.getItem(CONTACTS);
//     if (contactsFromLocal) {
//       this.setState({
//         contacts: JSON.parse(contactsFromLocal),
//       });
//     }
//   }

//   componentDidUpdate() {
//     const contactForLocal = JSON.stringify(this.state.contacts);
//     localStorage.setItem(CONTACTS, contactForLocal);
//   }

//   addContact = dataByForm => {
// const alreadyExist = this.state.contacts.some(
//   el => el.name.toLowerCase() === dataByForm.name.toLowerCase()
// );
// if (alreadyExist)
//   return alert(`${dataByForm.name} is already in contacts.`);

// const newContact = { id: nanoid(), ...dataByForm };
// this.setState(prev => ({
//   contacts: [newContact, ...prev.contacts],
// }));
//   };

//   deleteContact = id => {
// this.setState(prev => ({
//   contacts: prev.contacts.filter(el => el.id !== id),
// }));
//   };

//   getFilteredContacts = () => {
// const { contacts, filter } = this.state;
// return contacts.filter(el =>
//   el.name.toLowerCase().includes(filter.toLowerCase())
// );
//   };

//   handleFilter = ({ target: { value } }) => {
//     this.setState({
//       filter: value,
//     });
//   };

//   render() {
//     const filteredContacts = this.getFilteredContacts();

//     return (
//       <PhoneBook>
//         <h1>Phonebook</h1>
//         <ContactForm addContact={this.addContact} />

//         <h2>Contacts</h2>
//         <Filter handleFilter={this.handleFilter} />
//         <ContactList
//           contacts={filteredContacts}
//           deleteContact={this.deleteContact}
//         />
//       </PhoneBook>
//     );
//   }
// }
