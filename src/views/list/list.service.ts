import { Injectable } from '@tanbo/vue-di-plugin'
import { Http } from '@/services/Http'
export interface UserItem {
    name: string,
    avatar: string,
    like: number,
    char_total: number
}
export interface ArticleItem {
    _id: string
    title: string;
    content: string;
    user: UserItem;
    read: number;
    pay: number;
    like: number;
    reply: number;
    main_pic: string;
    char_count: number,
    createTime: string;
}
export interface ArticleDto {
    _id: string
    title: string;
    content: string;
    read: number;
    pay: number;
    like: number;
    reply: number;
    main_pic: string;
    char_count: number,
    createTime: string;
    user_like: number,
    username: string,
    avatar: string,
    char_total: number,
    user: UserItem,
}
@Injectable()
export class ListService {
  constructor (private http: Http) {}
  getArticleList () {
    return this.http.post<ArticleDto[]>('/article/list', {}).then(res => {
      return res.map((item: ArticleItem) => {
        return Object.assign({}, {
          _id: item._id,
          title: item.title,
          content: item.content,
          read: item.read,
          pay: item.pay,
          like: item.like,
          reply: item.reply,
          char_count: item.char_count,
          user: null,
          main_pic: item.main_pic,
          createTime: item.createTime,
          user_like: item.user?.like || 0,
          username: item.user?.name || '',
          avatar: item.user?.avatar || '',
          char_total: item.user?.char_total || 0
        })
      })
    })
  }
}
