import SingleChord from './SingleChord'
import SearchBar from './SearchBar'
import '../css/HomePage.css'
import React, { useState, useEffect } from 'react'

function HomePage({ setFavoriteChord, favoriteChords }) {

const [currentChord, setCurrentChord] = useState('')



  return (


  <div>
    <SearchBar setCurrentChord={setCurrentChord}/>
    {currentChord && <SingleChord chord={currentChord} setFavoriteChord={setFavoriteChord} favoriteChords={favoriteChords}/>}
    {!currentChord && <SingleChord chord={currentChord} />}
  </div>
  )
}

export default HomePage
