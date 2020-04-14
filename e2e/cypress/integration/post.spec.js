import faker from 'faker'

describe('Post', () => {
  it('shows posts in the list', () => {
    const randomPost = {
      title: faker.lorem.words(),
      content: faker.lorem.sentence(),
    }

    cy.task('db', {
      operation: 'post.create',
      variables: {
        data: randomPost,
      },
    })

    cy.visit('/posts')

    cy.findByText(randomPost.title)
    cy.findByText(randomPost.content)
  })
})
