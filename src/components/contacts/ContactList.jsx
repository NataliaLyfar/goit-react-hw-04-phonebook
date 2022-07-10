import PropTypes from 'prop-types';
import { Contact } from "./Contact";
import styled from "styled-components";

const List = styled.ul`
display: flex;
flex-direction: column;
justify-content: start;
align-items: stretch;
`;

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <List>
      {contacts.map(({id, name, number}) => (
        <Contact key={id} id={id}
            name={name} number={number}
            onDelete={onDeleteContact}
        />)
      )}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape).isRequired
};

