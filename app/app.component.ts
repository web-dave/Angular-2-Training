import {Component} from "angular2/core";
import { RouteConfig , ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from "angular2/router";
import {Member} from "./Member";
import { ListenViewComponent } from "./listen-view/listen-view.component";
import {HeaderComponent} from "./header/header.component";

@Component({
selector: "my-app",
  template: `
    <my-header></my-header>
    <router-outlet></router-outlet>
  `,
  directives: [
    HeaderComponent,
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
        component: ListenViewComponent
    }
])
export class AppComponent {
public members: Member[];
public selectedMember: Member;
constructor (){}
onSelect(member: Member) { this.selectedMember = member; }
}
