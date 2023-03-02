import React from 'react'
import { useContext } from 'react'
import {ParentContext} from './Parent'

export default function GetName() {
    const {setName} = useContext(ParentContext)
  return (
    <div>
        <input type="text" onChange={e => setName(e.target.value)} />
    </div>
  )
}
