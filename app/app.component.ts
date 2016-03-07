import {Component} from "angular2/core";
import {Member} from "./Member";
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from "angular2/router";
import {ListenViewComponent} from "./listen-view/listen-view.component";
import {NewMemberComponent} from "./new-member/new-member.component";

@Component({
    selector: "my-app",
    template: `
    <my-header></my-header>
    <nav>
        <a [routerLink]="['Liste']">Liste</a>
        <a [routerLink]="['Neu']">Neu</a>
    </nav>
    <h1>{{title}}</h1>
    <h2>{{subtitle}}</h2>

    <router-outlet></router-outlet>
  `,
    directives: [
        ROUTER_DIRECTIVES
    ],
    providers: [
        ROUTER_PROVIDERS
    ]
})

@RouteConfig([
    {
        path: "/liste",
        name: "Liste",
        component: ListenViewComponent,
        useAsDefault: true
    },
    {
        path: "/neu",
        name: "Neu",
        component: NewMemberComponent
    }
])
export class AppComponent {
    public title = "Das Team";
    public subtitle = "Mitglieder";
    public members: Member[];
    public selectedMember: Member;
    constructor() { }
    onSelect(member: Member) { this.selectedMember = member; }
}
