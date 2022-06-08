import SingleChord from './SingleChord'
import '../css/Favorites.css'
import React, { useState, useEffect } from 'react'

function Favorites({ favoriteChords }) {



  if(favoriteChords) {

    console.log(favoriteChords, "favorite chords in favorites")

    const favoriteChordNames = favoriteChords.map((chord) => {
      return chord.chordName.replaceAll(',', '')
    })


    return (
      <div>
        {favoriteChordNames}
      </div>
    )
  }


}

export default Favorites
