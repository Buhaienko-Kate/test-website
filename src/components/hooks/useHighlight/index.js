import React from 'react';

export const useHighlight = (inputValue, cardsArray) => {
  const searchInputArr = inputValue.split(' ');

  return cardsArray.map(card => {
    const { title, description } = card;
    const getHighlightedSearch = (classes, word) =>
      searchInputArr.includes(word) ? (
        <span className={`${classes} ${classes}_highlighted`}>{word}</span>
      ) : (
        <span className={classes}>{word}</span>
      );

    const titleArr = title.split(' ').map(word => getHighlightedSearch('title-word', word));

    const descriptionArr = description
      .split(' ')
      .map(word => getHighlightedSearch('description-word', word));

    return { ...card, titleArr, descriptionArr };
  });
};
