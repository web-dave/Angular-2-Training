import {describe, expect, it, inject, beforeEachProviders} from "angular2/testing";
import {AppComponent} from "./app.component";

export function main(): void {

    describe("AppComponent", () => {

        beforeEachProviders(() => [
            AppComponent
        ]);

        // allwas fail
        it("1+1=1 should allwas fail",() => {
            let num: number = 1;
            expect(num + num ).toBe(1);
        });
        
        // allwasy done
        it("1+1=2 should allwas done",() => {
            let num: number = 1;
            expect(num + num ).toBe(2);
        });
        
        // Use DI to instantiate DisplayName
        it("should define selectedMember", inject([AppComponent], (appComponent) => {

            appComponent.onSelect({"id": 13, "name": "Mr. Blonde"});

            expect(appComponent.selectedMember.name).toBe("Mr. Blonde");
        }));

    });
}