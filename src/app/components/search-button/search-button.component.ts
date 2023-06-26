import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ButtonModule, InputModule} from "carbon-components-angular";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
    selector: 'app-search-button',
    standalone: true,
    imports: [
        CommonModule,
        ButtonModule,
        FormsModule,
        ReactiveFormsModule,
        InputModule,
    ],
    templateUrl: './search-button.component.html',
    styleUrls: ['./search-button.component.scss']
})
export class SearchButtonComponent implements OnInit {
    form!: FormGroup;

    ngOnInit() {
        this.form = new FormGroup({
            'query': new FormControl(null, [
                Validators.required,
                Validators.minLength(3),
            ])
        });
    }

}
