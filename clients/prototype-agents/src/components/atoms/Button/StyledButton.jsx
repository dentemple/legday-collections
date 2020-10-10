import styled from 'styled-components'

/**
 * Styled Button component
 */
const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 2px;
  height: 3em;
  min-height: 3em;
  position: relative;
`

export default StyledButton

/* props */
export const StyledButtonProps = {}

StyledButton.propTypes = StyledButtonProps
