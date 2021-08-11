import {HttpClient} from '@angular/common/http';
import {Component, OnInit} from '@angular/core'; 

@Component({
    selector: 'app-product-all',
    templateUrl: './product-all.component.html',
    styleUrls: ['./product-all.component.css']
})
export class ProductAllComponent implements OnInit {

    constructor(
        private http: HttpClient 
    ) { 
    }

    ngOnInit(): void { 
        this.http.get('/product/all').subscribe({
            next: (data) => {
                console.log('/product/all data: ', data);
            },
            error: (err) => {
                console.log("/product/all err: ", err);
            }
        });
    } 
}
