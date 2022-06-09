import Axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
import { Router } from 'vue-router'
import { Injectable } from '@tanbo/vue-di-plugin'

export interface QueryParams {
  [key: string]: number | boolean | string | Array<number | boolean | string>;
}

export interface ResponseCommon {
  ret: 0 | 1
  msg: string
}

export class ResponseError extends Error {
  name = 'ResponseError'

  constructor (public responseBody: any, msg?: string) {
    super(msg)
  }
}

export interface HttpDefaultErrorHandle {
  errorCode: string | number | Array<number|string>
  handler(errorCode: number | string, msg: string): void
}

export interface CommonRequestFields {
  uid?: string;
  token?: string;
  team_id?: number;
}

@Injectable({
  provideIn: 'root'
})
export class Http {
  private axiosInstance: AxiosInstance;

  private commonRequestFields: CommonRequestFields = {}

  constructor (private defaultOptions: AxiosRequestConfig = {},
    router: Router,
    defaultErrorHandlers: HttpDefaultErrorHandle[] = []) {
    this.axiosInstance = Axios.create(this.defaultOptions)
    this.axiosInstance.interceptors.request.use(request => {
      request.headers.common['X-Cf-TeamID'] = this.commonRequestFields.team_id || -1
      request.data.common = {
        ...this.commonRequestFields
      }
      return request
    })
    this.axiosInstance.interceptors.response.use((response: any) => {
      const body = response.data
      body.resp_common = body.resp_common || {}
      const { ret, msg } = body.resp_common
      if (ret === 0) {
        return body
      }

      const timer = setTimeout(() => {
        for (const item of defaultErrorHandlers) {
          if (Array.isArray(item.errorCode) ? item.errorCode.includes(ret) : item.errorCode === ret) {
            item.handler(ret, msg)
          }
        }
        // eslint-disable-next-line no-magic-numbers
      }, 10)

      Object.defineProperty(body.resp_common, 'ret', {
        get () {
          clearTimeout(timer)
          return ret
        }
      })

      return Promise.reject(new ResponseError(body.resp_common, body.resp_common?.msg || '未知错误！'))
    })
  }

  getCommonRequestFields () {
    return this.commonRequestFields
  }

  addCommonRequestFields (params: CommonRequestFields) {
    Object.assign(this.commonRequestFields, params)
  }

  cleanCommonRequestFields () {
    this.commonRequestFields = {}
  }

  get<T = any> (url: string,
    params: QueryParams = {}): Promise<T & { resp_common: ResponseCommon }> {
    return this.axiosInstance.get(url, {
      params
    })
  }

  post<T = any> (url: string, data: any): Promise<T & { resp_common: ResponseCommon }> {
    return this.axiosInstance.post(url, {
      ...(data || {})
    })
  }
}
