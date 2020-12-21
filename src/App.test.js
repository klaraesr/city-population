import { render, screen } from '@testing-library/react'
import App from './App'

test('renders banner', () => {
  render(<App />)
  const banner = screen.getByText(/CityPop/i)
  expect(banner).toBeInTheDocument()
})
