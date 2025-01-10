import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/';
import ContactsList from './ContactsList';
import s from './App.module.css';

export const App = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) ?? []
  );

  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleSubmit = e => {
    e.preventDefault();

    const id = nanoid();
    const name = e.target.elements.name.value.trim();
    const number = e.target.elements.number.value.trim();

    if (contacts.find(el => el.name === name)) {
      alert(`${name} is already in contacts`);
    } else {
      setContacts(prev => [...prev, { id, name, number }]);
    }

    e.target.reset();
  };

  const handleDelete = id => {
    setContacts(prev => prev.filter(el => el.id !== id));
  };

  const handleChange = e => {
    setFilter(e.target.value);
  };

  const handleFilter = () => {
    const filteredList = contacts.filter(el =>
      el.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
    );
    return filteredList;
  };

  return (
    <div className={s.app}>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={handleSubmit} />

      <ContactsList
        onChange={handleChange}
        contactsArr={handleFilter()}
        onClick={handleDelete}
      />
    </div>
  );
};

// export default App;
/*
[
      { id: 'id-1', name: 'David Beckham', number: '111-111-1111' },
      { id: 'id-2', name: 'Luis Suárez', number: '222-222-2222' },
      { id: 'id-3', name: 'Mohamed Salah', number: '333-333-3333' },
      { id: 'id-4', name: 'Virgil van Dijk', number: '444-444-4444' },
      { id: 'id-5', name: 'Jurgen Klopp', number: '555-555-5555' },
      { id: 'id-6', name: 'Jamie Carragher', number: '666-666-2323' },
      { id: 'id-7', name: 'James Milner', number: '777-777-7777' },
      { id: 'id-8', name: 'Steven Gerrard', number: '888-888-8888' },
      { id: 'id-9', name: 'Frank Lampard', number: '999-999-9999' },
      { id: 'id-10', name: 'Xabi Alonso', number: '111-999-9999' },
    ]
*/
