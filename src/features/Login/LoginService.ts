// LoginService.ts
import { UserFormType } from "./LoginType"

export type LoginResponse = {
  success: boolean
  data?: UserFormType
  error?: string
}

export default async function loginUser({ data }: { data: UserFormType }): Promise<LoginResponse> {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(data)
      if (data.usuario === "admin" && data.senha === "admin") {
        resolve({ success: true, data })
      } else {
        resolve({ success: false, error: "Dados inválidos" })
      }
    }, 2000)
  })
}