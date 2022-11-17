import { Component, Input, OnInit } from '@angular/core';
import { Iproducts } from 'src/app/Models/iproducts';
import { ProductsService } from './../../services/products.service';


@Component({
  selector: 'app-products',
  templateUrl: './add-cat.component.html',
  styleUrls: ['./add-cat.component.scss']
})
export class AddCatComponent implements OnInit {
  product: Iproducts[] = [];
  cat:any ;
  prdObj: Iproducts = {} as Iproducts;
  constructor(private ps: ProductsService ) { }

  ngOnInit(): void {
    this.getAllproducts();
  }

  getAllproducts() {
    this.ps.getAllProducts(this.cat).subscribe(res => {
      this.product = res.map((e: any) => {
        const data = e.payload.doc.data();
        data.id = e.payload.doc.id;
        return data;
      })

    }, err => {
      alert('Error while fetching product data');
    })

  }

  addProduct(na:any) {
    if (this.prdObj.name == '' ) {
      alert('Please Fill Name Of Category !');
      return;
    }
    this.ps.addproduct(this.prdObj , this.cat);
    this.resetForm();
  }

  resetForm() {
    this.prdObj.id = '';
    this.prdObj.name = '';
  }


}

