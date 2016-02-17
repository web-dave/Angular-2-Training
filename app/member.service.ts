import {Injectable} from "angular2/core";
import {Http} from "angular2/http";
import {Member} from "./Member";
import "rxjs/add/operator/map";

@Injectable()
export class MemberService {
    constructor(private _http: Http) { }

    public getMembers() {
        return this._http.get("app/members.json")
            .map(res => res.json())
    }

}