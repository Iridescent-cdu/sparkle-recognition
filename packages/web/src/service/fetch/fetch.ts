import qs from 'qs'

interface FetchServiceInterface {
  get: <T>(url: string, data: {}, config: Omit<RequestInit, 'method'>) => Promise<T>
  post: <T>(url: string, data: {}, config: Omit<RequestInit, 'method'>) => Promise<T>
  delete: <T>(url: string, data: {}, config: Omit<RequestInit, 'method'>) => Promise<T>
  patch: <T>(url: string, data: {}, config: Omit<RequestInit, 'method'>) => Promise<T>
}
/* 简易封装Fetch请求 */
export class FetchService implements FetchServiceInterface {
  constructor(private readonly baseUrl: RequestInfo | URL, private readonly config: RequestInit = {}) {
    this.baseUrl = baseUrl
    this.config = config
  }

  protected request<T>(url: string, config: RequestInit) {
    return window.fetch(`${this.baseUrl}/${url}`, {
      ...this.config,
      ...config,
      headers: { ...this.config.headers, ...config.headers },
    }).then(async (res) => {
      const data: T = await res.json()
      if (res.ok)
        return data
      else return Promise.reject(data)
    })
  }

  public get<T>(url: string, data: {}, config: Omit<RequestInit, 'method'> = {

  }) {
    // qs.stringify将对象序列化成URL的形式
    const endpoint = `${url}?${qs.stringify(data)}`
    return this.request<T>(endpoint, {
      method: 'GET',
      ...config,
    })
  }

  public post<T>(url: string, data: {}, config: Omit<RequestInit, 'method'>) {
    return this.request<T>(url, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(data || {}),
      ...config,
    })
  }

  public delete<T>(url: string, data: {}, config: Omit<RequestInit, 'method'>) {
    return this.request<T>(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data || {}),
      ...config,
    })
  }

  public patch<T>(url: string, data: {}, config: Omit<RequestInit, 'method'>) {
    return this.request<T>(url, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'PATCH',
      body: JSON.stringify(data || {}),
      ...config,
    })
  }
}
