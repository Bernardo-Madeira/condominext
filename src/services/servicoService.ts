

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