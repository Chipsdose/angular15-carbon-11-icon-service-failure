import {ComponentFixture, TestBed} from '@angular/core/testing';
import {beforeEach, describe, it} from "@jest/globals";

import {SearchButtonComponent} from './search-button.component';
import {prepareIconService} from "../../../../test/helper/icon-service-setup";
import {dataTestId, getDebugElementFor} from "../../../../test/helper/test-helper";

const ID_MAIN_LABEL: string = dataTestId('sf-main-label');
const ID_MAIN_INPUT: string = dataTestId('sf-main-input');
const ID_BTN_SUBMIT: string = dataTestId('sf-btn-submit');

describe('SearchButtonComponent', () => {
    let component: SearchButtonComponent;
    let fixture: ComponentFixture<SearchButtonComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [SearchButtonComponent]
        })
            .compileComponents();

        prepareIconService();
        fixture = TestBed.createComponent(SearchButtonComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('button enables after input', () => {
        const searchBarLabel = getDebugElementFor(fixture, ID_MAIN_LABEL);
        const searchBtn = getDebugElementFor(fixture, ID_BTN_SUBMIT);

        expect(searchBtn.nativeElement.disabled).toBeTruthy();
        expect(searchBarLabel.attributes['ng-reflect-warn']).toBe('false');

        component.form.patchValue({
            'query': '12'
        });
        // TODO Fix for IconService breaks the test at this step https://github.com/carbon-design-system/carbon-components-angular/pull/2608
        fixture.detectChanges();
        expect(searchBtn.nativeElement.disabled).toBeTruthy();
        expect(searchBarLabel.attributes['ng-reflect-warn']).toBe('true');

        component.form.patchValue({
            'query': '1234'
        });
        fixture.detectChanges();
        expect(searchBtn.nativeElement.disabled).toBeFalsy();
        expect(searchBarLabel.attributes['ng-reflect-warn']).toBe('false');
    })
});
