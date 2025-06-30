import React, { useState } from 'react'
import Chil from './Chil'

function Parent() {
    const [value,setValue] = useState("")
  

  return (
    <div>
        <h1>{value}</h1>
        <Chil onChangeValue={setValue}/>

    </div>
  )
}

export default Parent