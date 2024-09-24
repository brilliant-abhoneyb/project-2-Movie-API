declare var google: any;
import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  private router = inject(Router);
  ngOnInit(): void{
    console.log(this.router)
    google.accounts.id.initialize({
      client_id:'40719888368-kbu1rqc75r6pokc7k1aobk9lmvoge7mp.apps.googleusercontent.com',
      callback: (resp: any) => this.handleLogin(resp)
    });

    google.accounts.id.renderButton(document.getElementById("google-btn"), {
      theme: 'filled_blue',
      size: 'large',
      shape: 'rectange',
      width: 350
    })
  }

  private decodeToken(token: string){
    return JSON.parse(atob(token.split(".")[1]));
  }
  handleLogin(response: any){
    if(response) {
      //decode token
      const payLoad = this.decodeToken(response.credential);
      //store 
      sessionStorage.setItem("loggedInUser", JSON.stringify(payLoad));
      //navigate
      this.router.navigate(['browse'])
    }
  }
}
