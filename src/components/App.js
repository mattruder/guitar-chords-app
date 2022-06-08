import '../css/App.css';
import HomePage from './HomePage'
import Favorites from './Favorites'
import Nav from './Nav'
import React, { useState, useEffect } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'


function App() {

  const [favoriteChords, setFavoriteChord] = useState([])

  console.log(favoriteChords, "favorite chords in app")

  return (
    <div>
      <BrowserRouter>
        <Nav />
          <Switch>
            <Route
              exact path='/'
              render={() => <HomePage setFavoriteChord={setFavoriteChord} favoriteChords={favoriteChords} />}
            />
            <Route
              exact path='/favorites'
              render={() => <Favorites setFavoriteChord={setFavoriteChord} favoriteChords={favoriteChords} />}
            />
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
