import {Injectable} from "@tanbo/vue-di-plugin";
import {Http} from "@/services/Http";

export interface User {
    name: string,
    avatar: string,
    like: number,
    char_total: number
}
export interface ArticleItem {
    title: string;
    content: string;
    user: User;
    read: number;
    pay: number;
    like: number;
    reply: number;
    main_pic: string;
    createTime: Date;
}
@Injectable()
export class ListService {
    constructor(private http: Http) {
    }
    getArticleList() {
        return this.http.post<ArticleItem[]>('/article/list', {})
    }
}
