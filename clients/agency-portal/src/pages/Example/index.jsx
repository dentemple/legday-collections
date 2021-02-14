import { useDispatch, useSelector } from 'react-redux'

/* state */
import { actions as exampleActions, selectors as exampleSelectors } from 'state/example'

/**
 * Page-level component
 */
export function Example() {
  /* library hooks */
  const dispatch = useDispatch()

  /* selector hooks */
  const count = useSelector(exampleSelectors.selectCount)
  const text = useSelector(exampleSelectors.selectText)

  /* render */
  return (
    <>
      <h1>Example</h1>
      <hr />
      <p>{text}</p>
      <div>
        <p data-testid="count-value">{count}</p>
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleDecrement}>-</button>
      </div>
    </>
  )

  function handleIncrement() {
    dispatch(exampleActions.increment())
  }

  function handleDecrement() {
    dispatch(exampleActions.decrement())
  }
}

export default Example
