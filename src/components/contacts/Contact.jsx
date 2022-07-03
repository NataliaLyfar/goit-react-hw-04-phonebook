import PropTypes from 'prop-types';
import {FaUserMinus} from "react-icons/fa";
import styled from "styled-components";

const ListItem = styled.li`
display: flex;
align-items: center;
margin-bottom: ${p => p.theme.space[1]}px;
box-shadow: 0px 14px 5px -5px ${p => p.theme.colors.tertiary};
`;
const Button = styled.button`
margin-left: auto;
display: flex;
justify-content: center;
align-items: center;
padding: ${p => p.theme.space[0]}px;
color: ${p => p.theme.colors.accent};
font-family:inherit;
font-weight: ${p => p.theme.fontWeights.normal};
font-size: ${p => p.theme.fontSizes.s};
background: transparent;
border: none;
border-radius: ${p => p.theme.radii.normal};
transition: all .3s ease;
box-shadow: 0px 1px 10px 1px ${p => p.theme.colors.accent};
&:hover {
    cursor: pointer;
    color: ${p => p.theme.colors.primary};
    box-shadow: 0 2px 8px rgba(22, 145, 158, 0.75), inset 0 1px rgba(255, 255, 255, 0.35),
      inset 0 10px rgba(255, 255, 255, 0.2), inset 0 10px 20px rgba(255, 255, 255, 0.25),
      inset 0 -15px 30px rgba(22, 145, 158, 0.75);
};
`;

export const Contact = ({ id, name, number, onDelete }) => {
    return (
        <ListItem key={id} id={id}>
           {name}: {number}
            <Button
              onClick={() => onDelete(id)}>
              <FaUserMinus/>
            </Button>
        </ListItem>
    );
};

Contact.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onDelete: PropTypes.func
};

