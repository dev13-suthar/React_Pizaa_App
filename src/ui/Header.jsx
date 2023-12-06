import { Link } from "react-router-dom"
import Searchorder from "../Features/order/Searchorder"
import Username from "../Features/user/Username"

export default function Header() {
  return (
    <header className="bg-yellow-500 uppercase px-4 py-3 border-b border-stone-200 sm:p-6 flex items-center justify-between">
      <Link to='/' className="tracking-widest">Fast React Pizza Co.</Link>
      <Searchorder/>
      <Username/>
    </header>
  )
}
