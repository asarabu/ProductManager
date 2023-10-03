import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProducts } from './products';

@Component({
  //selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle = "Product Detail";
  product : IProducts | undefined;
  constructor(private route: ActivatedRoute, private router : Router) {
  }

  ngOnInit(): void {
    const tId = Number(this.route.snapshot.paramMap.get('id'));
    this.pageTitle += `${tId}`;
  }

  onBack() : void {
    this.router.navigate(['/products']);
  }

}
