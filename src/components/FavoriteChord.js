import '../css/FavoriteChord.css'
import React, { useState, useEffect } from 'react'

function FavoriteChord({ chord, setFavoriteChord, favoriteChords, displayChord }) {

if (chord) {

  const chordName = chord.chordName.replaceAll(',', '')
  const chordTones = chord.tones.replaceAll(',', ' ')

  function removeFromFavorites(singleChord) {

    const favoriteChordNames = favoriteChords.map((chord) => {
      return chord.chordName
    })

    const favoriteChordIndex = favoriteChordNames.indexOf(singleChord.chordName)

    if (favoriteChordNames.includes(singleChord.chordName)) {
      setFavoriteChord([
        ...favoriteChords.slice(0, favoriteChordIndex),
        ...favoriteChords.slice(favoriteChordIndex + 1, favoriteChords.length)
      ])

        displayChord('')
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
        <button onClick={() => removeFromFavorites(chord)}>UnFavorite</button>
      </div>
    </div>
  )
} else if (chord === '') {
  return (
    <div className="single-chord-container">
      <h1>Select A Chord</h1>
    </div>
  )
}

}

export default FavoriteChord
