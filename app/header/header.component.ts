import {Component} from "angular2/core";

@Component({
  selector: "my-header",
  templateUrl: "app/header/header.template.html"
})
export class HeaderComponent {
public title = "Das Team";
public subtitle = "Mitglieder";
constructor (){}
}
