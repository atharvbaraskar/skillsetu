// @vitest-environment jsdom
import { render, screen } from '@testing-library/react'
import { expect, test } from 'vitest'
import App from './App'

test('shows the counter button', () => {
  render(<App />)
  expect(screen.getByRole('button', { name: /count is/i })).toBeTruthy()
})