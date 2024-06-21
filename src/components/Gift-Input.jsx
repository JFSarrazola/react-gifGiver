import React, { useState } from 'react';

export const GiftInput = ({changeCategory}) => {

  const [inputValue,setInputValue] = useState('')


  const setInputFunction=({target})=>{
    
    setInputValue(target.value);
  }

  const preventRefreash=(r)=>{
    r.preventDefault();

    if(inputValue.trim().length == 0 ) return;
    
    changeCategory(inputValue.trim());

    setInputValue('')
  }

  return (
    <form onSubmit={preventRefreash}>
      <input
        value={inputValue} 
        placeholder='try by name...' 
        type='text'
        onChange={setInputFunction}
      >

      </input>
     </form>
  )
}
