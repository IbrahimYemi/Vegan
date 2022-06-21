import React from 'react';
import Menudata from './Menudata';

export default function Menudetails(props) {
  const cards = Menudata.map((item) => {
    return (
      <div key={item.id} className="card">
        <img src={item.url} alt="food" className="card-image" />
        <h2 className="food-name">{item.name}</h2>
        <p className="price">${item.box_count}</p>
        <div className="icons">
          <i className="fa fa-heart"></i>
          <i className="fa fa-plus"></i>
        </div>
      </div>
    );
  });

  return (
    <div className="card-container">
      <div className="card-row">
        <div>{cards[0]}</div>
        <div>{cards[1]}</div>
        <div>{cards[2]}</div>
        <div>{cards[3]}</div>
      </div>
      <div className="card-row">
        <div>{cards[4]}</div>
        <div>{cards[5]}</div>
        <div>{cards[6]}</div>
        <div>{cards[7]}</div>
      </div>
      <div className="card-row">
        <div>{cards[8]}</div>
        <div>{cards[9]}</div>
        <div>{cards[10]}</div>
        <div>{cards[11]}</div>
      </div>
    </div>
  );
}
