import PropTypes from 'prop-types';
import {Component} from "react";
import { nanoid } from 'nanoid';
import {FaUserPlus, FaPhoneAlt} from "react-icons/fa";
import styled from "styled-components";

const Form = styled.form`
display: flex;
flex-flow: column;
justify-content: center;
align-items: start;
`;
const Label = styled.label`
font-weight: ${p => p.theme.fontWeights.normal};
font-size: ${p => p.theme.fontSizes.xs};
svg{
    margin-right: ${p => p.theme.space[0]}px;
};
`;
const Input = styled.input`
transition: all .3s ease;
margin-bottom: ${p => p.theme.space[1]}px;
padding: 0 ${p => p.theme.space[0]}px;
background: transparent;
border-radius: ${p => p.theme.radii.normal};
border: ${p => p.theme.borders.normal} ${p => p.theme.colors.accent};
height: 35px;
width: 350px;
color: ${p => p.theme.colors.primary};
font-family:inherit;
font-weight: ${p => p.theme.fontWeights.normal};
font-size: ${p => p.theme.fontSizes.s};
&:hover, &:focus {
    outline: none;
    background: ${p => p.theme.colors.secondary};
};
`;
const Button = styled.button`
display: flex;
justify-content: center;
align-items: center;
padding: ${p => p.theme.space[0]}px;
color: ${p => p.theme.colors.primary};
font-family:inherit;
font-weight: ${p => p.theme.fontWeights.normal};
font-size: ${p => p.theme.fontSizes.s};
background: transparent;
border: none;
border-radius: ${p => p.theme.radii.normal};
transition: all .3s ease;
box-shadow: 0 2px 8px rgba(210, 105, 30, 0.7), inset 0 1px rgba(255, 255, 255, 0.3),
      inset 0 10px rgba(255, 255, 255, 0.2), inset 0 10px 20px rgba(255, 255, 255, 0.25),
      inset 0 -15px 30px rgba(210, 105, 30, 0.7);
&:hover {
    cursor: pointer;
    box-shadow: 0 2px 8px rgba(129, 12, 110, 0.75), inset 0 1px rgba(255, 255, 255, 0.35),
      inset 0 10px rgba(255, 255, 255, 0.2), inset 0 10px 20px rgba(255, 255, 255, 0.25),
      inset 0 -15px 30px rgba(129, 12, 110, 0.75);
};
`;

export class ContactForm extends Component {
    state = {
        name: '',
        number: ''
    };

    static propTypes = {
      onSubmit: PropTypes.func.isRequired,
    };

    handleChange = e => {
      const {name, value} = e.currentTarget;
      this.setState({[name]: value});
    };
    handleSubmit = e => {
      e.preventDefault();
      this.props.onSubmit(this.state);
      this.reset();
    };
    reset = () => {
      this.setState({
      name: '',
      number: ''
      });
    };

    render() {
      const { name, number } = this.state;
        return (
            <Form onSubmit={this.handleSubmit}>
            <Label htmlFor={this.nameInputId}>
            <FaUserPlus/>
              Name
              </Label>
          <Input type='text' name='name' pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={this.handleChange}
            id={nanoid()}
          />
            <Label htmlFor={this.numberInputId}>
            <FaPhoneAlt/>
              Number
              </Label>
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={this.handleChange}
            id={nanoid()}
          />
          <Button type='submit'>Add contact</Button>
          </Form> 
        );
    };
};
