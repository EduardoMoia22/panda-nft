import check from '../../../assets/Check.svg'
import eth from '../../../assets/eth.svg'

export function ArtistCard(props){
  return(
    <div className="flex flex-col items-center justify-center gap-4">
      <div className='relative'>
        <img src={props.src}/>
        <img src={check} className='absolute right-0 bottom-[6px]'/>
      </div>
      <div className='flex flex-col items-center justify-center gap-4'>
        <h5 className="font-bold text-white text-2xl">
          {props.name}
        </h5>

        <div className='flex items-center justify-center gap-2'>
          <img src={eth}/>

          <h6 className="font-medium text-white">
            214.2 ETH
          </h6>
        </div>
      </div>
    </div>
  )
}