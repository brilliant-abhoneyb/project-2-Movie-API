import { Component, OnInit, inject,  HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MovieDetails } from '../../interfaces/movie-details';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  title ='dark-light-toggle';
  darkmode = false;
  toggleMode(){
    this.darkmode = !this.darkmode;
    document.documentElement.setAttribute('data-theme', this.darkmode ? "dark" : "light");
  }

  auth = inject(AuthService);
  signOut(){
    this.auth.signOut();
  }

  constructor(private router:Router){}

  // searchPage(text:string){
  //   text = text.trim();
  //   if (text.length > 0) {
  //     this.router.navigate(['/search/'+ text]);
  //   }
  // }

  searchPage(event: any, text:string){
    event.preventDefault();
    console.log(text)
    text = text.trim();
    if (text.length > 0) {
      this.router.navigate(['/search/'+ text]);
    }
  }

    onMovieCLick(movie:MovieDetails){
    this.router.navigate(['/description', movie.id])
  }

  goToPart(fragment:any){
    this.router.navigateByUrl('browse#'+fragment);
  }
}
