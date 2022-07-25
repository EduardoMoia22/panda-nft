import coco from '../assets/coco.svg'

export function CardPrimary(props){
  return(
    <div className="min-h-[368px] bg-card rounded-2xl flex items-center justify-center flex-col px-8">
      <div className='bg-primary rounded-full p-6'>
        <img src={coco}/>
      </div>
      
      <h5 className="font-bold text-2xl text-white mt-12">
        {props.title}
      </h5>

      <p className="text-sm mt-6 text-center">
        {props.desc}
      </p>
    </div>
  )
}