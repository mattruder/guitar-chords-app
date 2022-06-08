import '../css/SingleChord.css'
import React, { useState, useEffect } from 'react'

function SingleChord({ chord }) {



if (chord) {

  const chordName = chord.chordName.replaceAll(',', '')

  const chordTones = chord.tones.replaceAll(',', ' ')
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
