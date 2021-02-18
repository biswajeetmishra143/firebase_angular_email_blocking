import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  name: any = "";
  password: any = "";


  constructor(private angularFireAuth: AngularFireAuth,private router:Router) { }

  ngOnInit(): void {
  }
  login() {
    console.log(this.name);
    console.log(this.password);

    this.angularFireAuth.signInWithEmailAndPassword(this.name, this.password).then(res => {
      console.log('You are Successfully logged in!');
      this.router.navigate(['student'])
    })
      .catch(err => {
        console.log('Something is wrong:', err.message);
      });

  }
  signup(){
    this.router.navigate(['signup']);
    
  }

}
