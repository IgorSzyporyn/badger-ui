import React from 'react'
import styled from 'styled-components'
import { ButtonVariantType } from './ButtonVariantType'

import type { ThemeVariant } from 'theme/types'

type ButtonVariantProps = {
  variant: ThemeVariant
}

export const ButtonVariant = ({ variant }: ButtonVariantProps) => {
  return (
    <Wrapper>
      <ButtonVariantType type="primary" variant={variant} />
      <ButtonVariantType type="secondary" variant={variant} />
      <ButtonVariantType type="call2action" variant={variant} />
      <ButtonVariantType type="success" variant={variant} />
      <ButtonVariantType type="error" variant={variant} />
    </Wrapper>
  )
}

const Wrapper = styled.div``
