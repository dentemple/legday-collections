import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'

/* components */
import StyledText, { StyledTextProps } from './StyledText'

/**
 * Message
 */
export default function Message({ id, values, ...rest }) {
  return (
    <StyledText {...rest}>
      <FormattedMessage id={id} values={values} />
    </StyledText>
  )
}

/* props */
export const MessageProps = {
  ...StyledTextProps,
  id: PropTypes.string.isRequired,
  values: PropTypes.object
}

Message.propTypes = MessageProps
