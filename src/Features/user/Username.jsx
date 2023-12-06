import { useSelector } from "react-redux"


export default function Username() {
  const username = useSelector(state=>state.user.username)
  // const orderID = useSelector(state=>state.user.lastOrder)
  // console.log(orderID)

  if(!username) return null
  return (
    <div className="text-sm font-semibold hidden md:block">
      {username}
    </div>
  )
}
