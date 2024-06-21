import React, { useEffect, useState } from 'react';

import {getApi} from '../helpers/apiGifs'

export const useGetGifs = (categorie) => {

  const [ imag,setImag ] = useState([]);

  const [ loading,setLoading ] = useState(true);
  
  const giftGeter = async (g)=>{

    const myGifts = await getApi(g);

    setImag(myGifts);

    setLoading(false)
    
  }

  useEffect( ()=>{giftGeter(categorie)},[categorie])

  return (
    {
      imag,
      loading

    }
  )
}
