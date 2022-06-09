import {Http} from "@/services/Http";
import {ArticleItem} from "@/views/list/list.service";

export class DetailService {
    constructor(private http: Http) {
    }
    getArticleDetail(params: { articleId: number }) {
        return this.http.post<ArticleItem>('/article/detail', params)
    }
}
