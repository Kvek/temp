import MuiTextField from '@material-ui/core/TextField';
import Icon from '@mdi/react';

import styled from 'styled-components';

const smallSize = '18px !important';

export const SearchBar = styled(MuiTextField)`
  && {
    align-self: center;
    background-color: rgba(0, 0, 0, 0.15) !important;
    border-radius: 3px;
    box-shadow: inset 1px 1px 3px 0 rgba(0, 0, 0, 0.3);
    font-size: ${({ theme: { fontRg } }) => fontRg};
    margin: 0;
    max-width: 125px;
    padding: 0px !important;
    ${({ size }) => {
      if (size === 'small') {
        return ` 
          height: ${smallSize};
          & input {
              padding: 0 0 0 4px !important;
              height: ${smallSize};
            }`;
      }
      return null;
    }}
  }
`;

export const SearchIcon = styled(Icon)`
  && {
    align-self: center;
    color: ${({ theme: { searchBarIcon } }) => searchBarIcon};
    margin: 0 4px !important;
    min-width: 16px !important;
  }
`;
