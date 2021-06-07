import React from 'react'

import styled from 'styled-components'

export type BoxProps = React.HTMLAttributes<HTMLDivElement>

export const Box = ({ children, ...rest }: BoxProps) => {
  return (
    <Wrapper data-badgerui-box="" {...rest}>
      {children}
    </Wrapper>
  )
}

const Wrapper = styled.div``
