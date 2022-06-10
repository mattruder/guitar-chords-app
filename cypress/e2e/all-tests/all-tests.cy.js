describe('chord-generator-app', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
    cy.intercept('GET', 'https://api.uberchord.com/v1/chords/C', {
      statusCode: 200,
      body: {
        strings: "X 3 2 0 1 0",
        fingering: "X 3 2 X 1 X",
        chordName: "C,,,",
        enharmonicChordName: "C,,,",
        voicingID: "9223372036855826559",
        tones: "C,E,G"
      }
    })
  })

  it('User should see a homepage with the Strike A Chord navbar', () => {
    cy.get('.navbar').contains('Strike A Chord')
    cy.get('.navbar').contains('Favorites')
  })

  it('User should see a searchbar', () => {
    cy.get('.searchbar-container').contains('Root')
    cy.get('.searchbar-container').contains('Tonality')
    cy.get('.searchbar-container').contains('Generate Chord')
  })

  it('User should see a message before they generate a chord', () => {
    cy.get('.single-chord-container').contains('Select A Chord')
  })

  it('User should be able to generate a chord', () => {
    cy.get('.search-btn').click()
    cy.get('.notes').contains('C E G')
  })

  it('User should be able to favorite a chord', () => {
    cy.get('.search-btn').click()
    cy.get('.favorite-btn').click()
    cy.get('.favorites-area-btn').click()
    cy.get('.favorite-by-name-container').contains('C')
})

  it('User should be able to view a favorited chord', () => {
    cy.get('.search-btn').click()
    cy.get('.favorite-btn').click()
    cy.get('.favorites-area-btn').click()
    cy.get('.favorite-by-name-container').contains('C')
    cy.get('#C').click()
    cy.get('.chord-name').contains('C')

  })

  it('User should be able to go home from favorites area', () => {
    cy.get('.favorites-area-btn').click()
    cy.get('.home-btn').click()
    cy.get('.single-chord-container').contains('Select A Chord')
  })

})
