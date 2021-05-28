import React from 'react'
import { cleanup, render } from '@testing-library/react'
import { Button } from './Button'

describe('<Button />', () => {
  it('can perform a shallow render', () => {
    const { findByTestId } = render(<Button data-test-id="button" />)

    expect(findByTestId('button')).toBeDefined()

    cleanup()
  })

  it('will render correctly with minimum properties', () => {
    const { findByTestId, findByRole } = render(
      <Button data-test-id="button" label="Button Label" />
    )

    expect(findByTestId('button')).toBeDefined()
    expect(findByRole('button')).toBeDefined()

    cleanup()
  })

  it('can match snapshot for a shallow render', () => {
    const { container } = render(<Button />)
    expect(container).toMatchSnapshot()

    cleanup()
  })
})
