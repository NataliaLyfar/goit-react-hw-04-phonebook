import { useState } from 'react';
import { nanoid } from 'nanoid';
import { useLocalStorage } from 'hooks/useLocalStorage';
import { defaultContacts } from 'data/defaultContacts';
import { Notify } from 'notiflix';
import { Container } from 'components/Container';
import { Header } from 'components/Header';
import { Section } from 'components/Section';
import { ContactForm } from 'components/ContactForm';
import { ContactList } from 'components/Contacts';
import { Filter } from 'components/Filter';


export const App = () => {
const [contacts, setContacts] = useLocalStorage('contacts', defaultContacts)
const [filter, setFilter] = useState('');
 
const formSubmitHandler = ({ name, number }) => {
  const newContact = {
    id: nanoid(),
    name,
    number
  };
  contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase()) ?
    Notify.info(`${name} is already in contacts`, 
    {position: 'center-top', fontSize: '16px', width: '370px', info: {background: 'rgba(139, 6, 94)'}})
    : setContacts([newContact, ...contacts]);
};

const deleteContact = (contactId) => 
setContacts(prevContacts => prevContacts.filter(contact => contact.id !== contactId));

const handleChange = e => setFilter(e.target.value);

const handleFilter = () => {
  const normalizedFilter = filter.toLowerCase();
  return contacts.filter((contact) => 
    contact.name.toLowerCase().includes(normalizedFilter));
};

return (
  <Container>
    <Header>Phonebook</Header>
    <Section>
      <ContactForm onSubmit={formSubmitHandler}/>
    </Section>
    <Section title={"Contacts"}>
      <Filter
        filter={filter}
        onInputChange={handleChange}/>
      <ContactList 
        contacts={handleFilter()}
        onDeleteContact={deleteContact}
      />
    </Section>
  </Container>
  );
};

