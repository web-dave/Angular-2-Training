import {Injectable} from "angular2/core";
import {Http} from "angular2/http";
import {Member} from "./Member";
import "rxjs/add/operator/map";
import {Headers} from "angular2/http";

@Injectable()
export class MemberService {
    constructor(private _http: Http) { }

    public getMembers() {
        return this._http.get("app/members.json")
            .map(res => res.json())
    }
    public setMember(member) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        console.log(member);
        return this._http.put('app/members.json', member, {
                headers: headers
            })
            .map(res => res.json());
    }
}