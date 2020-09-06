import styled from 'styled-components'

/* components */
import { Box } from 'components/atoms'

/**
 * LoginPageContainer
 */

const LoginPageContainer = styled(Box)`
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  justify-content: center;

  height: 90%;

  & > * {
    margin-top: 2em;
  }
`

export default LoginPageContainer
