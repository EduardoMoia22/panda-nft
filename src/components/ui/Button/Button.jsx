export function Button(props){
  return(
    <button className='h-14 py-3 px-6 border border-primary rounded-2xl font-semibold text-white text-base'>
      {props.children}
    </button>
  )
}