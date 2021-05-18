import { TextFieldProps } from '@material-ui/core';
import { mdiMagnify } from '@mdi/js';

import React from 'react';

import { SearchBar, SearchIcon } from './SearchBox.styles';

export const SearchBox = ({ autoFocus, onChange, size }: TextFieldProps) => (
  <SearchBar
    autoFocus={autoFocus}
    className="searchBar"
    id="search-bar-textfield"
    InputProps={{
      disableUnderline: true,
      endAdornment: (
        <SearchIcon color="white" path={mdiMagnify} size={1} title="Search" />
      ),
    }}
    onChange={onChange}
    placeholder="Search"
    size={size}
    type="search"
  />
);
