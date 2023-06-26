import {ComponentFixture} from "@angular/core/testing";
import {By} from "@angular/platform-browser";

export function getDebugElementFor<T>(fixture: ComponentFixture<T>, search: string) {
    const {debugElement} = fixture;
    return debugElement.query(By.css(search));
}

export function dataTestId(id: string): string {
    return '[data-testid="' + id + '"]';
}