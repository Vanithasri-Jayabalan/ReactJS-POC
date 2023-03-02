import React, { useState } from 'react'
import GetName from './GetName';
import SetName from './SetName';
import { createContext } from 'react';
export const ParentContext = createContext(null);


//Using usecontect hook

export default function Parent() {
  const [name, setName] = useState('');
  return (

    <div className='App'>
      <h1>UseContext React Hook</h1>
      <br />
      {/* <GetName setName={setName}></GetName>
      <br /><br />
      <SetName name={name}></SetName> */}
      <ParentContext.Provider value={{name, setName}}>
        <GetName></GetName>
        <br/>
        <br/>
        <SetName></SetName>
      </ParentContext.Provider>
    </div>
  )
}
