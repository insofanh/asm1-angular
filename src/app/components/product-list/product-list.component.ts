import { Component } from '@angular/core';
import { IProduct } from 'src/app/interface/Product';
import { productService } from 'src/app/service/product-service/product-service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  products: IProduct[]=[];
  constructor(private productService: productService){
    this.productService.getProducts().subscribe(data=>{
      this.products=data
    },error=>{
      console.log(error.message);
      
    })
  }

  toggle(){

  }
  setValue(){

  }
  removeItem(id:any){
    this.productService.deleteProducts(id).subscribe(()=>{
      console.log('delete thanh cong');
      
    })
  }
}
