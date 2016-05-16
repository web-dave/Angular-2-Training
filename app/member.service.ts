import {Injectable} from "@angular/core";
import {Http, Headers} from "@angular/http";
import {Member} from "./Member";
import "rxjs/add/operator/map";

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