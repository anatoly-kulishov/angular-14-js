import {Component, OnInit} from '@angular/core';
import {ProductsService} from "../../services/products.service";
import {ModalService} from "../../services/modal.service";

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit {
  title = 'angular 14';
  // products: IProduct[] = [];
  loading = false;
  // products$: Observable<IProduct[]>
  term: ''

  constructor(
    public productsService: ProductsService,
    public modalService: ModalService
  ) {}

  ngOnInit(): void {
    this.loading = true;
    // this.products$ = this.productsService.getAll().pipe(
    //   tap(() => this.loading = false)
    // );
    this.productsService.getAll().subscribe(() => {
      this.loading = false;
    })
  }
}
