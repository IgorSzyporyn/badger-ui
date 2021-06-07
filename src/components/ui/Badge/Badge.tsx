import React from 'react'
import styled from 'styled-components'
import { RootWrapper } from '../RootWrapper/RootWrapper'

export type BadgeProps = {} & React.HTMLAttributes<HTMLDivElement>

export const Badge = ({ ...rest }: BadgeProps) => {
  return (
    <Wrapper {...rest}>
      <div>Here more JSX</div>
    </Wrapper>
  )
}

const Wrapper = styled(RootWrapper)``
