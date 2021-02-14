export default function createState(stateName, stateObject) {
  const mockAppState = {
    [stateName]: stateObject
  }

  return (callback) => {
    return callback(mockAppState)
  }
}
