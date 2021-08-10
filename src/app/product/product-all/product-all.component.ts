import {HttpClient} from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-product-all',
    templateUrl: './product-all.component.html',
    styleUrls: ['./product-all.component.css']
})
export class ProductAllComponent implements OnInit {

    constructor(
        private http: HttpClient,
        private formBuilder: FormBuilder
    ) { 
    }

    ngOnInit(): void {
        console.log("HIT ON INIT");

        this.http.get('/product/all').subscribe({
            next: (data) => {
                console.log('login data: ', data);
            },
            error: (err) => {
                console.log("login err: ", err);
            }
        });
    }

    submitHandler(): void {
        console.log("HIT SUBMITTER");

        this.http.get('/product/all').subscribe({
            next: (data) => {
                console.log('login data: ', data);
            },
            error: (err) => {
                console.log("login err: ", err);
            }
        });
    }
}
