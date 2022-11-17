import { Component, OnInit } from '@angular/core';
import { Iuser } from 'src/app/Models/iuser';
import { UserService } from './../../services/user.service';
import { AngularFireStorage  } from '@angular/fire/compat/storage';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  product: Iuser[] = [];

  path:String="";
  prdObj: Iuser = {} as Iuser;
  constructor(private ps: UserService ) {
   }

  ngOnInit(): void {
    this.getAllproducts();
  }

  getAllproducts() {
    this.ps.getAllProducts().subscribe(res => {
      this.product = res.map((e: any) => {
        const data = e.payload.doc.data();
        data.id = e.payload.doc.id;
        return data;
      })

    }, err => {
      alert('Error while fetching user data');
    })

  }

  addProduct() {
    if (this.prdObj.Name == '' ||this.prdObj.mobile==null || this.prdObj.Password == null || this.prdObj.Email == null ) {
      alert('Fill all input fields');
      return;
    }
    this.ps.addproduct(this.prdObj );
    this.resetForm();
  }

  resetForm() {
    this.prdObj.id = '';
    this.prdObj.Name = '';
    this.prdObj.mobile = 0;
    this.prdObj.Password = " ";
    this.prdObj.Email="";

  }


  deleteProduct(prodelete: Iuser ) {
    if (window.confirm('Are you sure you want to delete ' + prodelete.Name + '?')) {
      this.ps.deleteproduct(prodelete);
    }
  }

  updateproduct(prd:any ){
   this.ps.updateProduct(prd,prd.id );
  this.resetForm();
  }
  update(prd:any){
    this.prdObj = prd;
  }
}
