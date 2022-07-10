import PropTypes from 'prop-types';
import styled from 'styled-components';

const Subtitle = styled.h2`
text-align: center;
font-size: ${p => p.theme.fontSizes.l};
font-weight: ${p => p.theme.fontWeights.bold};
color: ${p => p.theme.colors.primary};
`;

export const Section = ({title, children}) => {
  return (
    <section>
      <Subtitle>{title}</Subtitle>
        {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any,
};
