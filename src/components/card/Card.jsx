import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import './card.scss';

const Card = ({ cards }) => {
  const { id } = useParams();

  const list = cards
    .filter(card => {
      return card.id === id;
    })
    .map(cardInfo => {
      const { id, title, description, avatar } = cardInfo;

      return (
        <div className="card-info" key={id}>
          <img alt="Avatar" src={avatar} className="card-info__img" />
          <div className="card-info__block">
            <h1 className="card-info__block-title">{title}</h1>
            <div className="card-info__block-desc">{description}</div>
          </div>
        </div>
      );
    });

  return (
    <div className="main-block">
      <div>{list}</div>
      <div className="main-block__link">
        <FontAwesomeIcon className="main-block__link-icon" icon={faArrowLeft} />
        <Link className="main-block__link-text" to="/">
          Back to homepage
        </Link>
      </div>
    </div>
  );
};
export default Card;
