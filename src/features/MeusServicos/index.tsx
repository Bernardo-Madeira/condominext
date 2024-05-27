import Loading from "@/components/Loading"
import { useState } from "react"




export default function MeusServicos(){

  const [loading, setLoading] = useState(false)


  return(

    <div className="h-full p-12 ">

      {
        loading ?
        <Loading/>
        :
        <div>

          {/* REGISTROS  */}

        </div>
      }

    </div>

  )

}