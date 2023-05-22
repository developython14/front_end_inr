import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decremented ,incremented } from '../../provider/store'
import { Header } from '../shared_componant/navbar'

export function Main() {
  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <Header/>
      hadi main page
    </div>
  )
}