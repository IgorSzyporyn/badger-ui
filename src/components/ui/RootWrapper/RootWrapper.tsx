import React from 'react'
import styled, { css } from 'styled-components'

import type { HTMLAttributes } from 'react'

type RootWrapperProps<T extends HTMLDivElement = HTMLDivElement> = HTMLAttributes<T>

export function RootWrapper<T extends HTMLDivElement = HTMLDivElement>({
  children,
  ...rest
}: RootWrapperProps<T>) {
  return (
    <Wrapper data-faceliftui-rootwrapper="" {...rest}>
      {children}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  ${({ theme }) => css`
    font-family: ${theme && theme.typography && theme.typography.fontFamily};
  `}
`
