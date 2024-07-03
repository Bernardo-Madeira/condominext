const BASEURL = 'http://localhost:3000'


export const avaliacaoStore = async (body: any) => {

  const response = await fetch(`${BASEURL}/avaliacao/store`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body)
  })
  const result = await response.json()
  return result

}
