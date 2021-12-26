import { AxiosRequestConfig } from 'axios'

export interface IResponse<T> {
  code: number
  data?: T
  message?: string
}

export interface IRequests {
  get: <T>(url: string, params?: unknown, config?: AxiosRequestConfig) => Promise<IResponse<T>>
  post: <T>(url: string, data: unknown, config?: AxiosRequestConfig) => Promise<IResponse<T>>
  delete: <T>(url: string, params: unknown, config?: AxiosRequestConfig) => Promise<IResponse<T>>
  patch: <T>(url: string, data: unknown, config?: AxiosRequestConfig) => Promise<IResponse<T>>
  put: <T>(url: string, data: unknown, cofig?: AxiosRequestConfig) => Promise<IResponse<T>>
  download: (url: string, params?: unknown) => Promise<void>
}
