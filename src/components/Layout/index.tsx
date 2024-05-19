
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

        <div className="bg-gray-950 w-full">
          <Outlet/>
        </div>

      </div>

      <Footer/>
      

    </div>

  )
}