import React from "react";
import "./search-box.styles.css";



 
export const SearchBox = ({ placeholder, handleChange }) => (
    /*note {placeholder, handlechange} is destructuring the prop object to get 
    the placeholder and built handleChange function property of the prop object*/
    <input className ="search-box"
        type="search" 
        placeholder={placeholder} 
        onChange={handleChange}
    />
);