import styled from 'styled-components'
import { typography } from 'styled-system'

/**
 * StyledText component
 */
const StyledText = styled.p`
  line-height: 1em;
  padding: 0.05px 0;

  ${typography}
`

export default StyledText

/* props */
export const StyledTextProps = {}

StyledText.propTypes = StyledTextProps
