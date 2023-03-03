import { useEffect } from 'react'

export default function UseEffect() {
    console.log("component called");


    useEffect(() => {
        console.log("UseEffect Called");
    });


    return (
        <div className='App'>
            <h1>UseEffect Example</h1>
            <div>{console.log("DOM returned")}</div>
        </div>
    )
}
