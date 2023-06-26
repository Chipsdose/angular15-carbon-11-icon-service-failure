import {Component, HostBinding} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderModule, IconModule, UIShellModule} from "carbon-components-angular";

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [
        CommonModule,
        HeaderModule,
        UIShellModule,
        IconModule,
    ],
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
    @HostBinding('class.cds--header') headerClass = true;

}
