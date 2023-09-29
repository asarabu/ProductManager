import { Component, OnInit } from '@angular/core';
import { IProducts } from './products';

@Component({
    selector: 'pm-products',
    templateUrl : './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})

export class ProductComponent implements OnInit {
    
    pageTitle = "Product List";
    imageWidth = 50;
    imageMargin = 1;
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
    products : IProducts[] = [
        {
            "productId" : 1,
            "productName" : "SS TON Vintage",
            "productCode" : "ss-01",
            "description" : "Players edition SS Bat",
            "boxedDate" : new Date(2022,2,22),
            "price" : 299.99,
            "starRating" : 4.6,
            "imageUrl" : "assets/ss-bat.jpeg",

        },
        {
            "productId" : 2,
            "productName" : "MRF VK Edition",
            "productCode" : "mrf-01",
            "description" : "Virat Kohli Edition Bat",
            "boxedDate" : new Date(2022,4,12),
            "price" : 499.99,
            "starRating" : 2.9,
            "imageUrl" : "assets/mrf-bat.jpg",

        },
        {
            "productId" : 3,
            "productName" : "Kookaburra Turf White Ball",
            "productCode" : "kbturf-01",
            "description" : "KB Turf Ball",
            "boxedDate" : new Date(2022,3,2),
            "price" : 49.99,
            "starRating" : 3.4,
            "imageUrl" : "assets/kbturf.png",

        },
        {
            "productId" : 4,
            "productName" : "Kookaburra red Ball",
            "productCode" : "kbred-01",
            "description" : "Kookaburra test ball",
            "boxedDate" : new Date(2022,11,14),
            "price" : 69.99,
            "starRating" : 4.1,
            "imageUrl" : "assets/kbred.jpg",

        }
    ]

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        this.showImage = true;
        this.listFilter = '';
    }

    performFilter(filterBy : string) : IProducts[]{
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product:IProducts) => product.productName.toLocaleLowerCase().includes(filterBy));
    }

    onRatingClicked(event: string) :void{
        this.pageTitle = 'Product List' + event;
    }
}