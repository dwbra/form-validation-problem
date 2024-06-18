describe('Form Validation', () => {
    beforeEach(() => {
        cy.visit('http://localhost:5173/');
    });

    it('Validates email field', () => {
        cy.get('#email').type('invalid-email');
        cy.contains('Submit').click({ force: true });

        cy.get('.email-input.error span').should(
            'contain',
            'Invalid email address'
        );

        cy.get('#email').type('dan@test.com');
        cy.contains('Submit').click({ force: true });
        cy.contains('Invalid email address').should('not.exist');
    });

    it('Requires the password field to be longer than 8 characters', () => {
        cy.get('#password').type('a');
        cy.contains('Submit').click({ force: true });

        cy.get('#passwordError').should(
            'contain',
            'Must be 8 characters or more'
        );

        cy.get('#password').type('123456789');
        cy.contains('Submit').click({ force: true });
        cy.contains('Must be 8 characters or more').should(
            'not.exist'
        );
    });

    it('Requires a colour to be selected', () => {
        cy.get('select#colour').select('');
        cy.contains('Submit').click({ force: true });

        cy.get('#colourError').should(
            'contain',
            'Colour must be selected'
        );

        cy.get('select#colour').select('red');
        cy.contains('Submit').click({ force: true });
        cy.contains('Colour must be selected').should('not.exist');
    });

    it('Requires at least two checkboxes to be selected', () => {
        cy.get('input#animals-Cat').check();
        cy.contains('Submit').click({ force: true });
        cy.get('#checkbox-group').should(
            'contain',
            'At least two animals must be chosen'
        );

        cy.contains('At least two animals must be chosen').should(
            'be.visible'
        );
        cy.get('input#animals-Dog').check();
        cy.contains('Submit').click({ force: true });
        cy.contains('At least two animals must be chosen').should(
            'not.exist'
        );
    });

    it('Shows Tiger Type field when Tiger checkbox is checked', () => {
        cy.get('#animals-Tiger').check();
        cy.get('#tigerType')
            .should('be.visible')
            .type('Bengal Tiger');

        cy.get('#animals-Tiger').uncheck();
        cy.contains('#tigerType').should('not.exist');
    });

    it('If Tiger Type field is showing, it requires an entry', () => {
        cy.get('#animals-Tiger').check();
        cy.get('#tigerType').type('Bengal Tiger');
        cy.contains('Type of Tiger required.').should('not.exist');
    });
});
