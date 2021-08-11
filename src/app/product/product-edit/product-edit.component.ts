import {HttpClient} from '@angular/common/http';
import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-product-edit',
    templateUrl: './product-edit.component.html',
    styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

    constructor(
        private http: HttpClient
    ) { }

    ngOnInit(): void { 
    }

}
