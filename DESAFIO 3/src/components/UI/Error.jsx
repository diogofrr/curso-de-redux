import React from 'react';
import P from 'prop-types';
import styled from 'styled-components';

const ErrorWrapper = styled.p`
  font-family: 'Roboto', sans-serif;
  color: red;
  font-size: 16px;
  font-weight: 700;
`;

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTriangleExclamation} from '@fortawesome/free-solid-svg-icons';

export const Error = ({children}) => {
  return (
    <ErrorWrapper>
      <FontAwesomeIcon icon={faTriangleExclamation} /> {children}
    </ErrorWrapper>
  );
};

Error.propTypes = {
  children: P.string.isRequired,
};
