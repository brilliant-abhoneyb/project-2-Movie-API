import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PostComponent } from './components/post/post.component';
import { MovieComponent } from './components/movie/movie.component';
import { LoginComponent } from './components/login/login.component';
import { DescriptionPosterComponent } from './components/description-poster/description-poster.component';
import { DescriptionComponent } from './components/description/description.component';
import { SearchComponent } from './components/search/search.component';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet, 
    PostComponent,
    MovieComponent,
    LoginComponent,
    DescriptionPosterComponent,
    DescriptionComponent,
    SearchComponent,
    HeaderComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'project-2';
}
