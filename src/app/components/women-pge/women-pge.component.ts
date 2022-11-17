import { ThisReceiver } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { Iproducts } from 'src/app/Models/iproducts';
import { ProductsService } from './../../services/products.service';
import { AngularFireStorage } from '@angular/fire/compat/storage';


@Component({
  selector: 'app-products',
  templateUrl: './women-pge.component.html',
  styleUrls: ['./women-pge.component.scss']
})
export class WomenPgeComponent implements OnInit {
  product: Iproducts[] = [];
  cat:any ='Women' ;
  path:String="";
  prdObj: Iproducts = {} as Iproducts;
  constructor(private ps: ProductsService ,  private fstorage:AngularFireStorage) { }

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

  addProduct() {
    if (this.prdObj.name == ''  || this.prdObj.imageURL== null ||this.prdObj.description ==null|| this.prdObj.price == null || this.prdObj.cat == null || this.prdObj.quantity == null) {
      alert('Fill all input fields');
      return;
    }
    this.ps.addproduct(this.prdObj , this.cat);
    this.resetForm();
  }

  resetForm() {
    this.prdObj.id = '';
    this.prdObj.name = '';
    this.prdObj.price = 0;
    this.prdObj.cat = " ";
    this.prdObj.quantity = 0;
    this.prdObj.description = "";
    this.prdObj.image = "";
    this.prdObj.imageURL="";

  }


  deleteProduct(prodelete: Iproducts ) {
    if (window.confirm('Are you sure you want to delete ' + prodelete.name + '?')) {
      this.ps.deleteproduct(prodelete , this.cat);
    }
  }

  updateproduct(prd:any ){
   this.ps.updateProduct(prd,prd.id , this.cat);
  this.resetForm();
  }
  update(prd:any){
    this.prdObj = prd;
  }

  upload(ev:any){
    this.path =ev.target.files[0]
  }
  uploadImage(){
    console.log(this.path);
this.fstorage.upload("/files"+Math.random().toString(36).substring(2)+this.path,this.path)

  }

}

