import {Component} from "@angular/core";
import {Member} from "../Member";
import {Validators,FormBuilder,Control,ControlGroup} from "@angular/common";
import {MemberService} from "../member.service";
@Component({
    selector: "new-member",
    inputs: ["member"],
    templateUrl: "app/new-member/new-member.template.html",
    styleUrls: ["app/new-member/new-member.styles.css"],
    providers: [MemberService]
})

export class NewMemberComponent {
    private newMember: Member;
    newMemberForm: ControlGroup;

    constructor(fb: FormBuilder,private _MemberService: MemberService) {
        this.newMemberForm = fb.group({
            "name": ["", Validators.required],
            "gender": ["", Validators.required]
        });
    }
    addMember() {
        console.log(this.newMemberForm.value);
        this.newMember = {
        "id": 0,
            "name": this.newMemberForm.value.gender + " " + this.newMemberForm.value.name
        };
        console.log(this.newMember);
        this._MemberService.setMember(this.newMember)
            .map(res => res.json())
            .subscribe(
                data => console.log('data',data),
                err => console.error(err),
                () => console.log('Gesendet')
            );
    }
}