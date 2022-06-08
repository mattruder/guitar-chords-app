import '../css/SingleChord.css'
import React, { useState, useEffect } from 'react'

function SingleChord({ chord, setFavoriteChord, favoriteChords }) {



if (chord) {

  const chordName = chord.chordName.replaceAll(',', '')
  const chordTones = chord.tones.replaceAll(',', ' ')

  function addToFavorites(singleChord) {

    const favoriteChordNames = favoriteChords.map((chord) => {
      return chord.chordName
    })

    if (!favoriteChordNames.includes(singleChord.chordName)) {
      setFavoriteChord([...favoriteChords, singleChord])
    } else {
      return
    }
  }

  return (
    <div className="single-chord-container">
      <div className="chord-name">
        <h1>{chordName}</h1>
      </div>
      <div className="strings">
        <h3>Fingering</h3>
        <h3>{chord.strings}</h3>
      </div>
      <div className="notes">
        <h3>Notes</h3>
        <h3>{chordTones}</h3>
      </div>
      <div className="favorite-btn-container">
        <button onClick={() => addToFavorites(chord)}>Favorite</button>
      </div>
    </div>
  )
} else {
  return (
    <div className="single-chord-container">
      <h1>Search For A Chord</h1>
    </div>
  )
}

}

export default SingleChord
