import React from 'react'
import styled from 'styled-components'
import { RootWrapper } from '../RootWrapper/RootWrapper'
import { Avatar } from '../Avatar/Avatar'

import type { ThemeColorType, ThemeSizeType } from '../../../theme/types'
import type { AvatarProps } from '../Avatar/Avatar'

export type ChipProps = {
  avatar?: AvatarProps
  label?: string
  type?: ThemeColorType
  size?: ThemeSizeType
  icon?: React.ReactNode
} & React.HTMLAttributes<HTMLDivElement>

export const Chip = ({ avatar, label, icon, size = 'normal', ...rest }: ChipProps) => {
  return (
    <Wrapper {...rest}>
      <WrapperInner size={size}>
        {avatar && <Avatar {...avatar} style={{ width: '100%', height: '100%' }} />}
        {label && <LabelWrapper>{label}</LabelWrapper>}
        {icon && <IconWrapper>{icon}</IconWrapper>}
      </WrapperInner>
    </Wrapper>
  )
}

const Wrapper = styled(RootWrapper)``

type WrapperInnerProps = {
  size: ThemeSizeType
}

const WrapperInner = styled.div<WrapperInnerProps>`
  display: flex;
  align-items: center;
`

const LabelWrapper = styled.span``

const IconWrapper = styled.span``
