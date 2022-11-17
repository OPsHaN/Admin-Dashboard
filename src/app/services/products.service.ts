import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Iproducts } from './../Models/iproducts';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private fire:AngularFirestore) { }
//Add
 addproduct(product:Iproducts , cat:any){
  product.id=this.fire.createId();
  return this.fire.collection(`/HM/LGUn3PhtxLEzwGxNKXLI/${cat}`).add(product);
 }


 //Delete
 deleteproduct(product:Iproducts ,cat:any){
  return this.fire.doc(`/HM/LGUn3PhtxLEzwGxNKXLI/${cat}/${product.id}`).delete();
 }
 //Update
 updateProduct(product:any , productid:string , cat:any){
return this.fire.doc(`/HM/LGUn3PhtxLEzwGxNKXLI/${cat}/${productid}`).update(product)
 }

 //GetAll
  getAllProducts(cat:any):Observable<any[]>{
    return this.fire.collection(`/HM/LGUn3PhtxLEzwGxNKXLI/${cat}`).snapshotChanges();
  }
}
