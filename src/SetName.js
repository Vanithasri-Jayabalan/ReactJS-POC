import React from 'react'
import { useContext } from 'react'
import {ParentContext} from './Parent'

export default function SetName() {
    const {name} = useContext(ParentContext);
  return (
    <div>
        Name: {name}
    </div>
  )
}
