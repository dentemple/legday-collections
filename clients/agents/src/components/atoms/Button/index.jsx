import React from 'react'

/* components */
import { Message, MessageProps } from 'components/atoms'
import StyledButton, { StyledButtonProps } from './StyledButton'

/**
 * Custom Button component
 */
export default function Button({ id, values, ...rest }) {
  return (
    <StyledButton {...rest}>
      <Message id={id} values={values} />
    </StyledButton>
  )
}

/* props */
export const ButtonProps = {
  ...MessageProps,
  ...StyledButtonProps
}

Button.propTypes = ButtonProps
