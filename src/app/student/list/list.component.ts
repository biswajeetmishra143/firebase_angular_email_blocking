import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  url = environment.host + "api";
  student: any[] = [];
  id: any = "";
  age: any = ""
  name: any = ""
  class: any = ""
  constructor(private http: HttpClient, private router: Router,private angularFireAuth:AngularFireAuth) { }

  ngOnInit(): void {
    this.student = [];
    this.http.get(this.url + "/student").subscribe((res: any) => {

      res.data.forEach((obj: any) => {
        obj.isChanged = false;
        this.student.push(obj);
      });
      console.log(this.student);
      
    })
  }
  create() {
    this.student.push({
      name: "",
      class: "",
      age: ""
    })

  }

  deletestudent(id: any) {
    this.http.delete(this.url + "/student/" + id).subscribe((res: any) => {
      console.log(res.msg);
      this.ngOnInit()

    })

  }
  async updatestudent(obj: any) {
    if (obj.isChanged == true) {
      delete obj.isChanged;
      let id = await obj.key;
      delete obj.key;
  
      var record = {
        ...obj
      }
  
      if (id == undefined) {
        this.http.post(this.url + "/student/", record).subscribe((res: any) => {
          console.log(res);
          this.ngOnInit();
        })
  
      } else {
        this.http.put(this.url + "/student/" + id, record).subscribe((res: any) => {
          console.log(res);
          this.ngOnInit();
  
        })
      }
    } else {
      alert("No Changes found..")
      
    }

 
  }
  logout(){ 
    this.angularFireAuth.signOut();
    console.log("signout");
    this.router.navigate([''])
    
  }

}
