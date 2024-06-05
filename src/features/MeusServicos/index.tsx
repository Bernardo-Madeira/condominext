import { useState } from "react"


export default function MeusServicos(){

  const [pedidos, setPedidos] = useState([])
  const [loading, setLoading] = useState(false)

  const Usuario = useSelector((state: any) => state.auth.user)

  useEffect(() => {
    pedidoPrestador(Usuario.UsuarioID).then(res => setPedidos(res))
  }, [])

  return(
    <>
    </>
  )
}