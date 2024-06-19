

const BASEURL = 'http://localhost:3000'

export const servicoStore = async (body: any) => {

  const response = await fetch(`${BASEURL}/servico/store`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body)
  })
  const result = await response.json()
  return result

}

export const servicoShow = async (ServicoID: string) => {

  const response = await fetch(`${BASEURL}/servico/show/${ServicoID}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  const result = await response.json()
  return result

}

export const servicoDelete = async (ServicoID: string) => {
  const response = await fetch(`${BASEURL}/servico/destroy`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ ServicoID: ServicoID })
  })
  const result = await response.json()
  return result
}

export const servicoIndex = async (PrestadorID: string) => {

  const response = await fetch(`${BASEURL}/servico/index`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ PrestadorID: PrestadorID })
  })
  const result = await response.json()
  return result

}

export const getAllServicos = async () => {
  const response = await fetch(`${BASEURL}/servico/getAllServicos`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  })
  const result = await response.json()
  return result
}