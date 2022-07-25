export function Container(props){
  return(
    <div className="w-[1200px] max-w-[90%] mx-auto">
      {props.children}
    </div>
  )
}