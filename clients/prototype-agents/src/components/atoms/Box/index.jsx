import styled from 'styled-components'
import { compose, color, flex, layout, space } from 'styled-system'

/**
 * Box component
 */
const Box = styled.div`
  ${compose(color, flex, layout, space)}
`

export default Box

/* props */
export const BoxProps = {}

Box.propTypes = BoxProps
