import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useHighlight } from '../hooks/useHighlight';

import './home.scss';

const Home = ({ cards }) => {
  const [searchInfo, setSearchInfo] = useState('');

  const filteredCards = cards.filter(card => {
    if (!searchInfo) {
      return card;
    }
    return (
      card.title.toLowerCase().includes(searchInfo.toLowerCase()) ||
      card.description.toLowerCase().includes(searchInfo.toLowerCase())
    );
  });

  const highlightedArticles = useHighlight(searchInfo, filteredCards);

  return (
    <div className="main-container">
      <div className="main-container__input">
        <form className="search-form" name="searchForm">
          <label className="search-form__label">Filter by keywords</label>
          <div className="search-form__search-input">
            <i className="fas fa-search search-form__icon"></i>
            <input
              className="search-form__input"
              type="text"
              placeholder="Search"
              value={searchInfo}
              onChange={e => setSearchInfo(e.target.value)}
            />
          </div>
        </form>
      </div>
      <div className="main-container__result">{`Results: ${filteredCards.length}`}</div>
      <div className="main-container__cards">
        {highlightedArticles.map(({ id, title, description, avatar, dateCreate }) => {
          const day = moment(dateCreate).format('MMMM Do, YYYY');

          return (
            <div className="card-block" key={id}>
              <img className="card-block__img" src={avatar} alt="image" />
              <div className="card-block__date">
                <FontAwesomeIcon className="card-block__date-icon" icon={faCalendar} />
                <span>{day}</span>
              </div>
              <h2 className="card-block__title">{title}</h2>
              <div className="card-block__desc">{description}</div>
              <div className="card-block__link">
                <Link className="card-block__link-text" to={`/${id}`}>
                  Read more
                </Link>
                <FontAwesomeIcon className="card-block__link-icon" icon={faArrowRight} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
