

const BASEURL = 'http://localhost:3000'

export const moradorIndex = async () => {

  const response = await fetch(`${BASEURL}/morador/index`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  })
  const result = await response.json()
  return result

}

export const moradorStore = async (body: any) => {

  const response = await fetch(`${BASEURL}/morador/store`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body)
  })
  const result = await response.json()
  return result

}

export const moradorDestroy = async (MoradorID: string) => {
  const response = await fetch(`${BASEURL}/morador/destroy`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      MoradorID: MoradorID
    })
  });

  const result = await response.json();
  return result;
};
