System.register(["@angular/core", "@angular/common", "../member.service"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, member_service_1;
    var NewMemberComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (member_service_1_1) {
                member_service_1 = member_service_1_1;
            }],
        execute: function() {
            NewMemberComponent = (function () {
                function NewMemberComponent(fb, _MemberService) {
                    this._MemberService = _MemberService;
                    this.newMemberForm = fb.group({
                        "name": ["", common_1.Validators.required],
                        "gender": ["", common_1.Validators.required]
                    });
                }
                NewMemberComponent.prototype.addMember = function () {
                    console.log(this.newMemberForm.value);
                    this.newMember = {
                        "id": 0,
                        "name": this.newMemberForm.value.gender + " " + this.newMemberForm.value.name
                    };
                    console.log(this.newMember);
                    this._MemberService.setMember(this.newMember)
                        .map(function (res) { return res.json(); })
                        .subscribe(function (data) { return console.log('data', data); }, function (err) { return console.error(err); }, function () { return console.log('Gesendet'); });
                };
                NewMemberComponent = __decorate([
                    core_1.Component({
                        selector: "new-member",
                        inputs: ["member"],
                        templateUrl: "app/new-member/new-member.template.html",
                        styleUrls: ["app/new-member/new-member.styles.css"],
                        providers: [member_service_1.MemberService]
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder, member_service_1.MemberService])
                ], NewMemberComponent);
                return NewMemberComponent;
            }());
            exports_1("NewMemberComponent", NewMemberComponent);
        }
    }
});
//# sourceMappingURL=new-member.component.js.map