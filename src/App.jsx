import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix';
import { Container } from './components/container';
import { Header } from 'components/header';
import { Section } from 'components/section';
import { ContactForm } from 'components/contactForm';
import { ContactList } from 'components/contacts';
import { Filter } from 'components/filter';


export class App extends Component {
state = {
  contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  filter: ''
};

componentDidMount() {
  const savedContacts = JSON.parse(localStorage.getItem('contacts'));
  if(savedContacts){
  this.setState({contacts: savedContacts});
};
};

componentDidUpdate(prevProps, prevState) {
  const {contacts} = this.state;
  if(contacts !== prevState.contacts){
  localStorage.setItem('contacts', JSON.stringify(contacts));
};
};

formSubmitHandler = ({ name, number }) => {
  const newContact = {
    id: nanoid(),
    name,
    number
  };
  this.setState(({ contacts }) => (
    contacts.find(contact => contact.name === newContact.name) ?
    Notify.info(`${newContact.name} is already in contacts`, 
    {position: 'center-top', fontSize: '16px', width: '370px', info: {background: 'rgba(139, 6, 94)'}}
    ) :
    {contacts: [newContact, ...contacts]}
  ));
};

deleteContact = (contactId) => 
this.setState(({ contacts }) => ({
  contacts: contacts.filter(contact => contact.id !== contactId)
}));

handleChange = e => this.setState({filter: e.currentTarget.value});

handleFilter = () => {
  const { contacts, filter } = this.state;
  const normalizedFilter = filter.toLowerCase();
  return contacts.filter((contact) => 
    contact.name.toLowerCase().includes(normalizedFilter));
};

render() {
  const { filter } = this.state;
    return (
      <Container>
        <Header>Phonebook</Header>
        <Section>
          <ContactForm onSubmit={this.formSubmitHandler}/>
        </Section>
        <Section title={"Contacts"}>
          <Filter
            filter={filter}
            onInputChange={this.handleChange}/>
          <ContactList 
            contacts={this.handleFilter()}
            onDeleteContact={this.deleteContact}
          />
        </Section>
      </Container>
      );
  };
};