import {Component, OnInit} from '@angular/core';
import {RouterModule, RouterOutlet} from "@angular/router";
import {RouterTestingModule} from "@angular/router/testing";
import {HeaderComponent} from "./header/header.component";
import Settings20 from "@carbon/icons/es/settings/20";
import User20 from "@carbon/icons/es/user/20";
import BrightnessContrast20 from "@carbon/icons/es/brightness-contrast/20";
import Language20 from "@carbon/icons/es/language/20";
import {IconService} from "carbon-components-angular";

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        RouterTestingModule,
        HeaderComponent,
        RouterModule
    ],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    constructor(
        private iconService: IconService,
    ) {

    }

    ngOnInit() {
        // TODO as of now IconMemoryCache throws Errors in Console while in Browser or in Tests but the icons load anyway
        // Strange behavior and there must be a fix for it.
        this.iconService.registerAll([Settings20, User20, BrightnessContrast20, Language20]);
    }

}
