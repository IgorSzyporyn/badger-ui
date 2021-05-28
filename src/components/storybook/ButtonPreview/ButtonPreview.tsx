import React from 'react'
import styled from 'styled-components'
import { ButtonVariant } from './components/ButtonVariant'

export const ButtonPreview = () => {
  return (
    <Wrapper>
      <ButtonVariant variant="filled" />
      <ButtonVariant variant="outlined" />
      <ButtonVariant variant="muted" />
      <ButtonVariant variant="flat" />
    </Wrapper>
  )
}

const Wrapper = styled.div``
