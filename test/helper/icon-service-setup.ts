import {TestBed} from "@angular/core/testing";
import {IconService} from "carbon-components-angular";
import {SSP_ICONS} from "../../src/app/ibm-icon";

export function prepareIconService(): void {
    const iconService = TestBed.inject(IconService);
    // mapping mock icon file to specific icons
    iconService.registerAs('settings', SSP_ICONS.Settings20);
    iconService.registerAs('user', SSP_ICONS.User20);
    iconService.registerAs('brightness-contrast', SSP_ICONS.BrightnessContrast20);
    iconService.registerAs('language', SSP_ICONS.Language20);
}