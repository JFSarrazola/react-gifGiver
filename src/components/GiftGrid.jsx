import {GiftGridItem} from './GiftGridItem';

import { useGetGifs } from '../hooks/useGetGifs';


export const GiftGrid = ({categories}) => {

  const {imag,isloading} = useGetGifs(categories);
    

  return (
    <>
    <h2>{categories}</h2>
    <div className ='card-grid'>
    {imag.map((imag)=><GiftGridItem key={imag.id} {...imag}/>)}
    </div>
    </>
  )
}
