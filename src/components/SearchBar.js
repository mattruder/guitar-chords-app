import '../css/SearchBar.css'
import React, { useState, useEffect, useRef } from 'react'

function SearchBar({ setCurrentChord }) {

  const rootInput = useRef(null)
  const tonalityInput = useRef(null)



    const fetchData = (chordName) => {
      fetch(`https://api.uberchord.com/v1/chords/${chordName}`)
      .then(response => response.json())
      .then(data => setCurrentChord(data[0]))
    }

  return (
    <div className="searchbar-container">
      <div className="root-input-area">
          <label htmlFor="root-input">Root:</label>
          <select className="root-input-form" name="root-input" ref={rootInput}>
            <option value="C">C</option>
            <option value="Db">Db</option>
            <option value="D">D</option>
            <option value="Eb">Eb</option>
            <option value="E">E</option>
            <option value="F">F</option>
            <option value="Gb">Gb</option>
            <option value="G">G</option>
            <option value="Ab">Ab</option>
            <option value="A">A</option>
            <option value="Bb">Bb</option>
            <option value="B">B</option>
          </select>
      </div>
      <div className="tonality-input-area">
            <label htmlFor="tonality-input">Tonality:</label>
            <select className="tonality-input-form" name="tonality-input" ref={tonalityInput}>
              <option value="">Major</option>
              <option value="m">Minor</option>
              <option value="7">Dominant 7</option>
              <option value="maj7">Major 7</option>
              <option value="m7">Minor 7</option>
              <option value="maj79">Major 9</option>
              <option value="m79">Minor 9</option>
              <option value="79">Dominant 9</option>
              <option value="11">Major 11</option>
              <option value="m11">Minor 11</option>
              <option value="maj713">Major 13</option>
              <option value="m713">Minor 13</option>
              <option value="713">Dominant 13</option>
            </select>
      </div>
      <button className="search-btn" onClick={() => fetchData(`${rootInput.current.value}_${tonalityInput.current.value}`)}>Generate Chord</button>

    </div>
  )
}

export default SearchBar
