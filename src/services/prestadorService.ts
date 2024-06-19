const BASEURL = 'http://localhost:3000'


export const prestadorStore = async (body: any) => {

  const response = await fetch(`${BASEURL}/prestador/store`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body)
  })
  const result = await response.json()
  return result

}

export const prestadoresSolicitacao = async () => {

  const response = await fetch(`${BASEURL}/prestador/solicitacoes`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  const result = await response.json()
  return result

}

export const getPedidos = async (PrestadorID: string) => {
  const response = await fetch(`${BASEURL}/prestador/getPedidos/${PrestadorID}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  const result = await response.json()
  return result

}

export const prestadorUpdate = async (body: any) => {

  const response = await fetch(`${BASEURL}/prestador/update`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body)
  })
  const result = await response.json()
  return result

}