import {Component} from "angular2/core";
import {Member} from "./Member";
import {MemberDetailsComponent} from "./member-details/member-details.component";
import {MemberListComponent} from "./member-list/member-list.component";
import {HeaderComponent} from "./header/header.component";

@Component({
selector: "my-app",
  template: `
    <my-header></my-header>
    <member-list (onSelectMember)="selectedMember = $event"></member-list>
    <member-details [member]="selectedMember"></member-details>
  `,
  directives: [
    MemberDetailsComponent,
    HeaderComponent,
    MemberListComponent
  ]
})
export class AppComponent {
public members: Member[];
public selectedMember: Member;
constructor (){}
onSelect(member: Member) { this.selectedMember = member; }
}
