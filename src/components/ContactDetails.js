
export default function ContactDetails(props) {
  return (
    <div className="flex  items-center mb-4 shadow-md w-60 p-2 bg-white">
    <div> <img src={props.avatar} alt=""  className="h-16 w-16 rounded-full " /></div>
    <div className="ml-5">{props.name}</div>
    </div>
  )
}
