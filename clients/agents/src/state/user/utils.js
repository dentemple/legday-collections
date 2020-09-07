function whitelistUserResponse({ createdAt, displayName, fullname, headerUrl, profileUrl }) {
  return {
    createdAt,
    displayName,
    fullname,
    headerUrl,
    profileUrl
  }
}

const utils = {
  whitelistUserResponse
}

export default utils
