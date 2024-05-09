// Third-Party Libraries
import axios from "axios"

export function getApi() {
  // Vars
  const services = axios.create({ baseURL: process.env.NEXT_PUBLIC_BASE_URL })

  return services
}