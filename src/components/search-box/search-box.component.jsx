import React from 'react';

import './search-box.styles.css'

export const SearchBox = ({ placeHolder, handleChange }) => ( // destruct props into placeholder and handleChange
  <input
    className="search"
    type="search" 
    placeholder={placeHolder}
    onChange={handleChange}
  />
);