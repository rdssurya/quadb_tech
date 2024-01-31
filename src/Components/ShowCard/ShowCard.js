import React from 'react';
import './ShowCard.css';
import { useNavigate } from 'react-router-dom';

const ShowCard = (props) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/summary', {state: props.show});
    }

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
            <button className='book-button' onClick={handleClick}>
                Book This Show
            </button>
        </div>
    </div>
  );
};

export default ShowCard;