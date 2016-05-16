System.register(["@angular/core", "../member-details/member-details.component", "../member-list/member-list.component"], function(exports_1, context_1) {
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
    var core_1, member_details_component_1, member_list_component_1;
    var ListenViewComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (member_details_component_1_1) {
                member_details_component_1 = member_details_component_1_1;
            },
            function (member_list_component_1_1) {
                member_list_component_1 = member_list_component_1_1;
            }],
        execute: function() {
            ListenViewComponent = (function () {
                function ListenViewComponent() {
                }
                ListenViewComponent = __decorate([
                    core_1.Component({
                        selector: "list-view",
                        template: "\n    <member-list (onSelectMember)=\"selectedMember = $event\"></member-list>\n    <member-details [member]=\"selectedMember\"></member-details>\n  ",
                        directives: [
                            member_details_component_1.MemberDetailsComponent,
                            member_list_component_1.MemberListComponent
                        ],
                        providers: []
                    }), 
                    __metadata('design:paramtypes', [])
                ], ListenViewComponent);
                return ListenViewComponent;
            }());
            exports_1("ListenViewComponent", ListenViewComponent);
        }
    }
});
//# sourceMappingURL=listen-view.component.js.map