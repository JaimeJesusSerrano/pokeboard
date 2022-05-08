import React from 'react'

import { render, screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react'

import App from './App'

test('Homepage', async () => {
  render(<App />)

  waitForElementToBeRemoved(screen.getByTestId('screen-loader'))
    .then(async () => {
      await waitFor(() => {
        const linkElement = screen.getByText(/Pokeboard/i)
        expect(linkElement).toBeInTheDocument()
      })
    })
    .catch(error => console.log(error))
})
