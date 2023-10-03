import { Component, OnDestroy, OnInit } from '@angular/core';
import { IProducts } from './products';
import { ProductService } from './product-service';
import { Subscription } from 'rxjs';

@Component({
    //selector: 'pm-products',
    templateUrl : './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})

export class ProductComponent implements OnInit, OnDestroy {

    private _productService : ProductService;
    /**
     *
     */
    
    pageTitle = "Product List";
    imageWidth = 50;
    imageMargin = 2;

    errorMessage : string = "";
    sub!: Subscription;
    private _listFilter : string = ''; 
    get listFilter() :string {
        return this._listFilter;
    }
    set listFilter(value: string) {
        this._listFilter =  value;
this.filteredProducts =  this.performFilter(value);
    }
    filteredProducts : IProducts[] = [];
    showImage = false;
    products : IProducts[] = [];

    constructor(private productService : ProductService) {
       
        this._productService = productService;
    }
    

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    performFilter(filterBy : string) : IProducts[]{
        
        filterBy = filterBy.toLocaleLowerCase();
        this.products = this.products.sort((x) => x.productId);
        return this.products.filter((product:IProducts) => product.productName.toLocaleLowerCase().includes(filterBy));
    }

    ngOnInit(): void {
        this.showImage = true;
        this.sub = this._productService.getProducts().subscribe({
            next: product => {this.products = product;
                this.filteredProducts = this.products;
            },
            error: err => this.errorMessage = err
        });
        this._listFilter = '';
    }

   

    onRatingClicked(event: string) :void{
        this.pageTitle = 'Product List' + event;
    }

    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }
}