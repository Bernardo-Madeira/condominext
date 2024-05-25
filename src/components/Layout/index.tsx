
import { Outlet } from "react-router-dom"
import Header from "./Header"
import Navbar from "./Navbar"
import Footer from "./Footer"

export default function Layout() {
  return (

    <div className="h-screen">

      <Header/>

      <div className=" h-[88%] flex">

        <Navbar/>

        <div className="w-full overflow-y-scroll bg-gray-950">
          <Outlet/>
        </div>

      </div>

      <Footer/>
      

    </div>

  )
}