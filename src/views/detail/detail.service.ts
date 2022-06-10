import { Http } from '@/services/Http'
import { ArticleItem } from '@/views/list/list.service'
import { Injectable } from '@tanbo/vue-di-plugin'

@Injectable()
export class DetailService {
  constructor (private http: Http) {
  }

  getArticleDetail (params: { articleId: number }) {
    return this.http.post<ArticleItem>('/article/detail', params)
  }
}
