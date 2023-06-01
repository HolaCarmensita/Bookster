/*
* 
 * Author Niklas Nguyen
 * 
 * date 23-05-31
seach component is a input field that send it value to a parent that uses useState
the parent send setQuary from a useState that search component takes and send its value thru
 */

import React from "react";
import "./searchcomponent.css";

export default function SearchComponent({ setQuary }) {
  return (
    <div>
      <input
        className="search"
        type="text"
        data-testid="searchInput"
        placeholder="Type to search"
        onChange={(e) => setQuary(e.target.value)}
      />
    </div>
  );
}
