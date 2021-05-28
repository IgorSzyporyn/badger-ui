import React, { useRef } from 'react'
import styled from 'styled-components'
import { nanoid } from 'nanoid'
import { Button } from '../Button/Button'

import type { ButtonProps } from '../Button/Button'

/**
 * ### Cylindo-UI: Tag
 *
 * Type definition for Tag component properties
 */
export type TagProps = {} & ButtonProps

/**
 * ### Cylindo-UI: Tag
 * Create a small tag with
 */
export const Tag = ({ children, label, ...rest }: TagProps) => {
  const idRef = useRef(nanoid())
  const id = idRef.current

  return <Wrapper data-cylindoui-tag="" id={id} {...rest} />
}

const Wrapper = styled(Button)``
