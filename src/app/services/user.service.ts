import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Iuser } from './../Models/iuser';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private fire:AngularFirestore) { }
//Add
 addproduct(user:Iuser ){
  user.id=this.fire.createId();
  return this.fire.collection(`/Users/`).add(user);
 }

 //Delete
 deleteproduct(user:Iuser ){
  return this.fire.doc(`/Users/${user.id}`).delete();
 }
 //Update
 updateProduct(user:any , userid:string ){
return this.fire.doc(`/Users/${userid}`).update(user)
 }

 //GetAll
  getAllProducts():Observable<any[]>{
    return this.fire.collection(`/Users`).snapshotChanges();
  }
}
