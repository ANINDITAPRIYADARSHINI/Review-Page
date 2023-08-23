import React from 'react';

export default function Navbar(props) {
  return (
    <nav>
      <img src={`../images/${props.logo}`} className="nav--logo" />
    </nav>
  );
}
