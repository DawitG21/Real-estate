import { Component, OnInit }  from '@angular/core';
import { LoginService } from 'src/service/loginApi.service';
import { UserApiService } from 'src/service/userApi.service';
import { IUser } from 'src/interfaces/IUser';
import { IUserModel } from 'src/models/IUser.model'
import { Router, NavigationExtras } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
/* import { NgForm } from '@angular/forms'; */

@Component({
    selector:'login-selector',
    templateUrl:'login-page.html',
    styleUrls:['./login-page.css']
})

export class LoginComponent implements OnInit {

    users : IUser[];
    getID: IUser;
    addUser :IUser;
    cheekUser:IUser;

    ngOnInit(): void {
            /* this.getUsers(); */
      /*       this.resetForm(); */
    }

    constructor(private _userApiService : UserApiService , public route: Router , 
        public toastr:ToastrService , public _loginService: LoginService){

        this.addUser = new IUserModel();
        this.addUser.Id ;
        this.addUser.UserName = '';
        this.addUser.Email = '';
        this.addUser.Secret_Key = '';

        this.cheekUser = new IUserModel()
        this.cheekUser.UserName = '';
        this.cheekUser.Secret_Key = '';
    }

    getUsers(){
        this._userApiService.getAllUsers()
          .subscribe(allusers => { 
          this.users = allusers 
          console.log(this.users);
          })
      }
    
    creatingNewUser(){
        this._userApiService.createUser(this.addUser)
        .subscribe(res=>{
           /*  console.log(res) */
            this.toastr.success("User Registration Successful");
        })
    }

    loginUser(){
        this._loginService.sendUser(this.cheekUser)
        .subscribe(res=>{
           /*  console.log(res); */
            this.getID = res;
            if(res){
                this.sendUserID(this.getID);
            } else {
                this.toastr.warning("Incorrect UserName or Password");
            }
        })
    }

    sendUserID(Id) {
        let navigationExtras : NavigationExtras = {
          queryParams : {
            "USERID" : JSON.stringify(Id)
          }
        }
        this.route.navigate(['/properties'], navigationExtras);
      }

     toggleSignup(){
        document.getElementById("login-toggle").style.backgroundColor="#fff";
         document.getElementById("login-toggle").style.color="#222";
         document.getElementById("signup-toggle").style.backgroundColor="#00BFFF";
         document.getElementById("signup-toggle").style.color="#fff";
         document.getElementById("login-form").style.display="none";
         document.getElementById("signup-form").style.display="block";
     }
     
      toggleLogin(){
         document.getElementById("login-toggle").style.backgroundColor="#00BFFF";
         document.getElementById("login-toggle").style.color="#fff";
         document.getElementById("signup-toggle").style.backgroundColor="#fff";
         document.getElementById("signup-toggle").style.color="#222";
         document.getElementById("signup-form").style.display="none";
         document.getElementById("login-form").style.display="block";
     }
     
     /* openProperties() {
        this.route.navigate(['/properties']);
      } */

}