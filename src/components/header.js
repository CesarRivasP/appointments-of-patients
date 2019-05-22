import React from 'react';

const Header = (props) => {
  const { title } = props;
  return (
    <header>
      <h1 className="text-center">{title}</h1>
    </header>
  );
}

export default Header;
