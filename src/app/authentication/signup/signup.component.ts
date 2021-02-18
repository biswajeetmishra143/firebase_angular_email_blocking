import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  name : any=""
  password : any=""

  constructor(private angularFireAuth: AngularFireAuth,private router:Router) { }

  ngOnInit(): void {
  }
  signup(){
    this.angularFireAuth.createUserWithEmailAndPassword(this.name,this.password);
    
    setTimeout( () => {
      this.router.navigate([''])

    },2000);
  }


}
