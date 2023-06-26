import {Component, OnInit} from '@angular/core';
import {RouterModule, RouterOutlet} from "@angular/router";
import {RouterTestingModule} from "@angular/router/testing";
import {HeaderComponent} from "./header/header.component";
import Settings20 from "@carbon/icons/es/settings/20";
import User20 from "@carbon/icons/es/user/20";
import BrightnessContrast20 from "@carbon/icons/es/brightness-contrast/20";
import Language20 from "@carbon/icons/es/language/20";
import {GridModule, IconService} from "carbon-components-angular";
import {SearchButtonComponent} from "./components/search-button/search-button.component";

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        RouterTestingModule,
        HeaderComponent,
        RouterModule,
        SearchButtonComponent,
        GridModule
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
        this.iconService.registerAll([Settings20, User20, BrightnessContrast20, Language20]);
    }

}
