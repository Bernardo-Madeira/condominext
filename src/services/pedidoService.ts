

const BASEURL = 'http://localhost:3000'

export const pedidoStore = async (body: any) => {

  const response = await fetch(`${BASEURL}/pedido/store`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body)
  })
  const result = await response.json()
  return result

}

export const pedidoUpdate = async (body: any) =>{
  const response = await fetch(`${BASEURL}/pedido/update`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body)
  })
  const result = await response.json()
  return result
}

export const pedidoIndex = async (MoradorID: string) => {
  const response = await fetch(`${BASEURL}/pedido/index`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({MoradorID: MoradorID})
  })
  const result = await response.json()
  return result
}

export const servicoPrestador = async (PrestadorID: string) => {
  const response = await fetch(`${BASEURL}/pedido/prestador`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({PrestadorID: PrestadorID})
  })
  const result = await response.json()
  return result
}
