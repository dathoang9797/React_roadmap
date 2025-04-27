import { render, screen } from '@testing-library/react'
import { Users } from '.'
// import { http, HttpResponse } from 'msw'
// import { server } from '../../mocks/server'

describe('Users', () => {
  test('renders correctly', () => {
    render(<Users />)
    const textElement = screen.getByText('Users')
    expect(textElement).toBeInTheDocument()
  })

  test('renders a list of users', async () => {
    render(<Users />)
    const users = await screen.findAllByRole('listitem')
    console.log(users.length)
    expect(users).toHaveLength(3)
  })

  // test('renders error', async () => {
  //   server.use(
  //     http.get(
  //       'https://jsonplaceholder.typicode.com/users',
  //       () => {
  //         return HttpResponse.json(
  //           { message: 'Error fetching users' },
  //           { status: 500 }
  //         )
  //       }
  //     )
  //   )
  //   render(<Users />)
  //   const error = await screen.findByText('Error fetching users')
  //   expect(error).toBeInTheDocument()
  // })
})