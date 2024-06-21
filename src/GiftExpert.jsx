import { useState } from 'react';

import { GiftInput,GiftGrid } from './components';


export const GiftExpertApp = () => {

  const [categories, setCategories] = useState([]);

  function addValue(e){
    const newCategories = [e,...categories];
    if(categories.includes(e)) {return};
    setCategories(newCategories)
  }
  
  return (
    <>
      <GiftInput changeCategory = {addValue}/>
      <h1> Gift Search! </h1>
    
      {categories.map((e)=> <GiftGrid categories={e} key={e}/>)}

    </>
  )
}
