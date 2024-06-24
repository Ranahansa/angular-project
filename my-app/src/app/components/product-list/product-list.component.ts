import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent implements OnInit {
  products : any[] = [];
  searchTerm: string = '';

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data: any) => {
      this.products = data;
    });
  }

  searchProducts():void {
    if(this.searchTerm){
      this.products = this.products.filter(product =>
        product.title.toLowerCase().includes(this.searchTerm.toLowerCase())
      )
    } else {
      this.ngOnInit();
    }
  }
}
