import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Card from './components/card/Card';
import Home from './components/home/Home';
import { fetchCardsList } from './infoGateway';

const App = () => {
  const [cards, setCards] = useState([]);

  const getCardsList = () => {
    fetchCardsList()
      .then(cardsList => {
        setCards(cardsList);
      })
      .catch(error => alert(error));
  };

  useEffect(() => {
    getCardsList();
  }, []);

  return (
    <>
      <div className="page">
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Home cards={cards} />
            </Route>

            <Route path="/:id">
              <Card cards={cards} />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </>
  );
};
export default App;
