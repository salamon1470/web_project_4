describe('Change avatar', () => {
  it('Changes the avatar pic', () => {
    cy.visit('/')
    cy.get('.img-div').click()
    cy.get('.popup-edit-pic').should('be.visible')
    cy.get('input[name="avatar"]').type('http://www.nasa.gov/sites/default/files/thumbnails/image/web_first_images_release.png')
    cy.get('button[id="popup-edit-pic-submit"]').click()
    cy.get('.popup-edit-pic').should('not.be.visible')
    cy.get('#profile-img.profile__pic').should('have.attr','src').should('include','http://www.nasa.gov/sites/default/files/thumbnails/image/web_first_images_release.png')
    cy.reload()
    cy.get('#profile-img.profile__pic').should('have.attr','src').should('include','http://www.nasa.gov/sites/default/files/thumbnails/image/web_first_images_release.png')
  })
})