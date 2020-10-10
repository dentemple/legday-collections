import PropTypes from 'prop-types'

export const CurrentUser = {
  createdAt: PropTypes.number,
  displayName: PropTypes.string,
  fetchStatus: PropTypes.string,
  fullname: PropTypes.string,
  headerUrl: PropTypes.string,
  isCurrentUser: PropTypes.bool,
  profileUrl: PropTypes.string
}

const propTypes = { CurrentUser }

export default propTypes
