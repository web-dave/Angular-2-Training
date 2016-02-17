import {Component} from "angular2/core";
import {Member} from "../Member";
@Component({
  selector: "member-details",
  inputs: ["member"],
  template: `
        <div *ngIf="member">
            <h2>{{member.name}} details!</h2>
            <div><label>id: </label>{{member.id}}</div>
            <div>
                <label>name: </label>
                <div><input [(ngModel)]="member.name" placeholder="name"></div>
            </div>
        </div>
  `
})

export class MemberDetailsComponent {
    public member: Member;
}
