System.register(["@angular/core", "../member.service"], function(exports_1, context_1) {
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
    var core_1, member_service_1;
    var MemberListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (member_service_1_1) {
                member_service_1 = member_service_1_1;
            }],
        execute: function() {
            MemberListComponent = (function () {
                function MemberListComponent(_MemberService) {
                    this._MemberService = _MemberService;
                    this.onSelectMember = new core_1.EventEmitter();
                }
                MemberListComponent.prototype.onSelect = function (member) {
                    this.selectedMember = member;
                    this.onSelectMember.emit(member);
                };
                MemberListComponent.prototype.getMembers = function () {
                    var _this = this;
                    this._MemberService.getMembers()
                        .subscribe(function (data) { return _this.members = data; }, function (error) { return console.log(error); }, function () { return console.log("Finished"); });
                };
                MemberListComponent.prototype.ngOnInit = function () {
                    this.getMembers();
                };
                MemberListComponent = __decorate([
                    core_1.Component({
                        selector: "member-list",
                        templateUrl: "app/member-list/member-list.template.html",
                        styleUrls: ["app/member-list/member-list.styles.css"],
                        directives: [],
                        providers: [member_service_1.MemberService],
                        outputs: ["onSelectMember"]
                    }), 
                    __metadata('design:paramtypes', [member_service_1.MemberService])
                ], MemberListComponent);
                return MemberListComponent;
            }());
            exports_1("MemberListComponent", MemberListComponent);
        }
    }
});
//# sourceMappingURL=member-list.component.js.map