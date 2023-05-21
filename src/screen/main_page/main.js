import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decremented ,incremented } from '../../provider/store'

export function Main() {
  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      hadi main page
    </div>
  )
}