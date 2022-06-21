import React from 'react';

export default function Header() {
  return (
    <div className="styles">
      <div className="vegan">
        <img
          className="header-image"
          src="https://media.istockphoto.com/photos/vegan-buttons-badge-picture-id1352467795?k=20&m=1352467795&s=612x612&w=0&h=TnT3ZPSSJ90h6KwxyZWDDQlVQLlFxD3tOXXdjUKLL4o="
        />
        <h3>VEGAN</h3>
      </div>
      <nav>
        <li>Home</li>
        <li>Menu</li>
        <li>Order</li>
        <li>Newsletter</li>
      </nav>
    </div>
  );
}
