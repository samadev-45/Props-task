import React from 'react'

function Chil({onChangeValue}) {
   return (
    <div>
      <h3>Child Component</h3>
      <input
        type="text"
        placeholder="Type here"
        onChange={(e) => onChangeValue(e.target.value)}
      />
    </div>
  );
}

export default Chil

