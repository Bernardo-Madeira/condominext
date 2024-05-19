
import { Link } from "react-router-dom"

export default function Header(){
  return(
    <div className="flex justify-center items-center bg-gray-700 h-[7%] text-gray-50">
      <Link className="font-Montserrat text-2xl" to={'/condominext'}>CondomiNext</Link>
    </div>
  )
}