import React from 'react'
import styled from 'styled-components'
import { Button } from '../../../ui/Button/Button'

import type { ButtonProps } from '../../../ui/Button/Button'

import type { ThemeVariant, ThemeColorType } from 'theme/types'

type ButtonExamplesProps = {
  title: string
  variant: ThemeVariant
  type: ThemeColorType
  ButtonProps?: ButtonProps
}

export const ButtonExamples = ({
  title,
  variant,
  type,
  ButtonProps = {},
}: ButtonExamplesProps) => {
  return (
    <Wrapper>
      <TitleWrapper>
        <Title>{type}</Title>
        <Subtitle1>{variant}</Subtitle1>
        <Subtitle2>{title}</Subtitle2>
      </TitleWrapper>
      <VariantRow>
        <Button
          type={type}
          variant={variant}
          size="xlarge"
          label="xlarge"
          {...ButtonProps}
        />
        <Button
          type={type}
          variant={variant}
          size="large"
          label="large"
          {...ButtonProps}
        />
        <Button
          type={type}
          variant={variant}
          size="normal"
          label="normal"
          {...ButtonProps}
        />
        <Button
          type={type}
          variant={variant}
          size="medium"
          label="medium"
          {...ButtonProps}
        />
        <Button
          type={type}
          variant={variant}
          size="small"
          label="small"
          {...ButtonProps}
        />
      </VariantRow>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`

const TitleWrapper = styled.h4`
  min-width: 140px;
  margin-right: 16px;
`

const VariantRow = styled.div`
  display: flex;
  align-items: flex-end;

  & > [data-badgerui-button] {
    margin-right: 16px;

    &:last-child {
      margin-right: 0;
    }
  }
`

const Title = styled.div`
  margin-bottom: 4px;
`

const Subtitle1 = styled.div`
  font-size: 11px;
  font-weight: 400;
  margin-bottom: 2px;
`

const Subtitle2 = styled.div`
  font-size: 11px;
  font-weight: 400;
`
