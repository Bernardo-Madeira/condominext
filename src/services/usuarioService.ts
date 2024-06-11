

const BASEURL = 'http://localhost:3000'

export const usuarioIndex = async () => {

  const response = await fetch(`${BASEURL}/usuario/index`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  })
  const result = await response.json()
  return result

}

export const usuarioLogin = async (body: {Email: string, Senha: string}) => {
  const response = await fetch(`${BASEURL}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body)
  })
  const result = await response.json()
  console.log(result)
  return result
}

export const usuarioUpdate = async (body: any) => {
  const response = await fetch(`${BASEURL}/usuario/update`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body)
  })
  const result = await response.json()
  return result
}

export const usuarioShow = async (UsuarioID: string) => {
  const response = await fetch(`${BASEURL}/usuario/show/${UsuarioID}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  const result = await response.json()
  return result
}

export const usuarioDestroy = async (UsuarioID: string) => {
  const response = await fetch(`${BASEURL}/usuario/destroy`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({UsuarioID: UsuarioID})
  })
  const result = await response.json()
  return result
}