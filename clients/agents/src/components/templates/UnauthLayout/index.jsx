import styled from 'styled-components'

/* components */
import { Box } from 'components/atoms'

/**
 * UnauthLayout component
 */
const UnauthLayout = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};

  height: 90%;

  & > * {
    margin-top: 2em;
  }
`

export default UnauthLayout
