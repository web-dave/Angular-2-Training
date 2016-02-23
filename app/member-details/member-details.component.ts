import {Component} from "angular2/core";
import {Member} from "../Member";
@Component({
    selector: "member-details",
    inputs: ["member"],
    templateUrl: "app/member-details/member-details.template.html",
    styleUrls: ["app/member-details/member-details.styles.css"],
})

export class MemberDetailsComponent {
    public member: Member;
}