import React from 'react';

export const useHighlight = (inputValue, cardsArray) => {
  const searchInputArr = inputValue.split(' ');

  return cardsArray.map(card => {
    const { title, description } = card;
    const getHighlightedSearch = (classes, word, index) =>
      searchInputArr.includes(word) ? (
        <span key={index} className={`${classes} ${classes}_highlighted`}>
          {word}
        </span>
      ) : (
        <span key={index} className={classes}>
          {word}
        </span>
      );

    const titleArr = title
      .split(' ')
      .map((word, index) => getHighlightedSearch('title-word', word, index));

    const descriptionArr = description
      .split(' ')
      .map((word, index) => getHighlightedSearch('description-word', word, index));

    return { ...card, titleArr, descriptionArr };
  });
};
