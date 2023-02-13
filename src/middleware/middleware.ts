import axios from 'axios'

class Api {
  private api = axios.create({
    baseURL: 'https://welbi.org/api/',
    headers: { Authorization: 'Bearer c44f6c1e-ce8c-441c-aaa0-05556a303bea' },
  })

  private handleAPIException(error: any) {
    // Todo: product based error logic to be added
    console.error(error)
  }

  get<T>(url: string, params?: object): () => Promise<T> {
    return async () => {
      try {
        const response = await this.api.get<T>(url, { params })
        return response.data
      } catch (error) {
        this.handleAPIException(error)
        throw error
      }
    }
  }

  post<T>(url: string, data?: object): () => Promise<T> {
    return async () => {
      try {
        const response = await this.api.post<T>(url, data)
        return response.data
      } catch (error) {
        this.handleAPIException(error)
        throw error
      }
    }
  }

  put<T>(url: string, data?: object): () => Promise<T> {
    return async () => {
      try {
        const response = await this.api.put<T>(url, data)
        return response.data
      } catch (error) {
        this.handleAPIException(error)
        throw error
      }
    }
  }

  delete<T>(url: string, params?: object): () => Promise<T> {
    return async () => {
      try {
        const response = await this.api.delete<T>(url, { params })
        return response.data
      } catch (error) {
        this.handleAPIException(error)
        throw error
      }
    }
  }
}

const WebliApi = new Api()

export default WebliApi
