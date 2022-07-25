import { useState } from 'react'
import yeslike from '../assets/like.svg'
import nolike from '../assets/nolike.svg'
import fire from '../assets/fire.svg'
import autor from '../assets/autor.png'

export function CardSecondary(props){
  const [like, setLike] = useState(false)
  
  return(
    <div className="min-h-[568px] bg-card rounded-2xl flex items-center justify-center flex-col px-8">
      <div>
        <div className='relative'>
          <img src={props.src}/>
          <button className='absolute top-0 right-0 p-6' onDoubleClick={() => setLike(true)} onClick={() => setLike(false)} >
            {
              like ? <img src={yeslike} /> : <img src={nolike} />
            }
          </button>
        </div>
      </div>
      
      <div className='flex flex-col items-center justify-between w-full mt-6'>
        <div className='flex justify-between w-full'>
          <h6 className='font-bold text-white'>Dao Vinci #0000</h6>
          <p>Current Bid</p>
        </div>
        
        <div className='flex justify-between items-center w-full mt-2'>
          <div className='flex items-center justify-center'>
            <img src={autor} className='rounded-full'/>
            <p className='ml-2 text-sm'>
              @SalvadorDali
            </p>
          </div>
          <h6 className='font-bold text-white'>
            4.89 eTH
          </h6>
        </div>

        <div className='flex items-center justify-between w-full mt-8'>
          <div className='flex items-center gap-2'>
            <img src={fire}/>
            <p className='font-bold text-white'>05 : 12 : 07 : 26</p>
          </div>
          <button className='bg-primary px-12 py-2 rounded-2xl text-white font-semibold'>
            Bid
          </button>
        </div>
      </div>
    </div>
  )
}