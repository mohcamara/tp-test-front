describe('Pokedemo E2E', () => {
    beforeEach(() => {
        // Mock the Pokemon list API call
        cy.intercept('GET', 'https://pokeapi.co/api/v2/pokemon', {
            statusCode: 200,
            body: {
                results: [
                    { name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' },
                    { name: 'ivysaur', url: 'https://pokeapi.co/api/v2/pokemon/2/' },
                ]
            }
        }).as('getPokemons');

        // Mock the Pokemon details API call
        cy.intercept('GET', 'https://pokeapi.co/api/v2/pokemon/bulbasaur', {
            statusCode: 200,
            body: {
                name: 'bulbasaur',
                abilities: [
                    { ability: { name: 'overgrow', url: '' }, is_hidden: false, slot: 1 }
                ]
            }
        }).as('getBulbasaur');

        cy.visit('/');
    });

    it('should display the correct title', () => {
        cy.contains('pokedemo');
    });

    it('should display the pokemon list and allow selection', () => {
        cy.wait('@getPokemons');

        // Check if select has options
        cy.get('select').should('contain', 'bulbasaur');
        cy.get('select').should('contain', 'ivysaur');

        // Select bulbasaur
        cy.get('select').select('bulbasaur');

        // Click Go
        cy.get('button').contains('Go').click();

        cy.wait('@getBulbasaur');

        // Check if details are shown in app-poke-info (h3)
        cy.get('app-poke-info h3').should('contain', 'bulbasaur');
        cy.get('app-poke-info ul li').should('contain', 'overgrow');
    });
});
