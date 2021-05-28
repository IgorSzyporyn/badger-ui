import React from 'react'
import styled from 'styled-components'
import { ButtonExamples } from './ButtonExamples'

import type { ThemeColorType, ThemeVariant } from 'theme/types'

type ButtonVariantTypeProps = {
  variant: ThemeVariant
  type: ThemeColorType
}

export const ButtonVariantType = ({ type, variant }: ButtonVariantTypeProps) => {
  return (
    <Wrapper>
      <ButtonExamples type={type} variant={variant} title="normal" />
      <ButtonExamples
        type={type}
        variant={variant}
        title="disabled"
        ButtonProps={{ disabled: true }}
      />
      <ButtonExamples
        type={type}
        variant={variant}
        title="icon"
        ButtonProps={{ icon: 'ARViewer' }}
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin-bottom: 64px;
`
