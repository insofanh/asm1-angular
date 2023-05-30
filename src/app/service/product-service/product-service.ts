import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import { Observable } from "rxjs";
import { IProduct } from "src/app/interface/Product";

@Injectable({
    providedIn:'root'
})

export class productService{
constructor(private http: HttpClient){ }
    getProducts(): Observable<IProduct[]>{
        return this.http.get<IProduct[]>('http://localhost:3000/products')
    };
    deleteProducts(id: any): Observable<IProduct[]>{
        return this.http.delete<IProduct[]>('http://localhost:3000/products')
    }
    getProductsById(id:number): Observable<IProduct[]>{
        return this.http.get<IProduct[]>('http://localhost:3000/products')
    }
}
