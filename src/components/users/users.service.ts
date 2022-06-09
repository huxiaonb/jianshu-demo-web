import {Http} from "@/services/Http";
import {Injectable} from "@tanbo/vue-di-plugin";
import {UserItem} from "@/views/list/list.service";

@Injectable()
export class UsersService {
    constructor(private http: Http) {
    }
    getUsers() {
        return this.http.post<UserItem[]>('/user/list', {})
    }
}
