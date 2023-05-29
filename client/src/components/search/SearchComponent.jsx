import React from "react";

export default function SearchComponent({ setQuary }) {
  return (
    <div>
      <input type="text" placeholder="Type to search" onChange={(e) => setQuary(e.target.value)} />
    </div>
  );
}
