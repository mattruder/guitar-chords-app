import SingleChord from './SingleChord'
import '../css/Favorites.css'
import React, { useState, useEffect } from 'react'
import FavoriteChord from './FavoriteChord'

function Favorites({ favoriteChords, setFavoriteChord }) {

const [chordToDisplay, displayChord] = useState('')

  if(favoriteChords) {



    const favoriteChordNames = favoriteChords.map((chord) => {
      return <button onClick={() => displayChord(chord)}>{chord.chordName.replaceAll(',', '')}</button>
    })


    return (
      <div className='favorites-container'>
        <div className='favorite-by-name-container'>
          {favoriteChordNames}
        </div>
        <div className='chord-display-container'>
          <FavoriteChord chord={chordToDisplay} chordToDisplay={chordToDisplay} displayChord={displayChord} setFavoriteChord={setFavoriteChord} favoriteChords={favoriteChords} />
        </div>
      </div>
    )
  }


}

export default Favorites
