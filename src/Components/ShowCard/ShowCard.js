import React from 'react';
import './ShowCard.css';

const ShowCard = (props) => {
  return (
    <div className="card">
        <div className="show-name">
            <img src={props.imgUrl} alt={props.name} className='show-img'/>
        </div>
        <div className="show-details">
            <span>
                Show Name: {props.name}
            </span>
            <span>
                Language: {props.language}
            </span>
            <button className='book-button'>
                Book This Show
            </button>
        </div>
    </div>
  );
};

export default ShowCard;