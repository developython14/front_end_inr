import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decremented ,incremented } from '../../provider/store'

export function Counter() {
  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(incremented())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decremented())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}