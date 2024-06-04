

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
  const response = await fetch(`${BASEURL}/usuario/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body)
  })
  const result = await response.json()
  return result
}
