import React from 'react';
import Menu from './Menu';

export default function Body() {
  return (
    <div>
      <header className="body">
        <div className="body-image">
          <p className="paragraph">
            WELCOME TO WHERE YOUR TASTE MATTERS;
            <br />
            <span>serving to please your expectations</span>
          </p>
        </div>
      </header>
      <Menu />
    </div>
  );
}
