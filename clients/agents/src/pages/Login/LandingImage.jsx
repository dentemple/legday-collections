import styled from 'styled-components'

/* components */
import { Image } from 'components/atoms'

/* utils */
import { spin } from 'utils/keyframes'

/**
 * LandingImage component
 */
const LandingImage = styled(Image)`
  animation: ${spin} infinite 20s linear;
  min-height: 120px;
  min-width: 120px;
`

export default LandingImage
