import * as React from 'react';
import './style.css';
import Forms from './Forms';
import Header from './Header';
import Body from './Body';
import Subscribe from './Subscribe';
import Footer from './Footer';

export default function App() {
  const [show, setShow] = React.useState(false);
  function handleChange(event) {
    const { name, value, type, checked } = event.target;

    setShow((prevShow) => !prevShow);
  }

  return (
    <div>
      <Header />
      <Body />
      <div className="order-button">
        <button className="button" onClick={handleChange}>
          {show ? 'ENJOY' : 'ORDER'}
        </button>
      </div>
      {show && <Forms />}
      <Subscribe />
      <Footer />
    </div>
  );
}
