import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '../../interfaces/caretelera';
import { PipesModule } from '../../pipes/pipes.module';


@Component({
  selector: 'app-description-poster',
  standalone: true,
  imports: [CommonModule, PipesModule],
  templateUrl: './description-poster.component.html',
  styleUrl: './description-poster.component.css'
})
export class DescriptionPosterComponent {
  @Input() movies?:Movie[];

  constructor(private router:Router){}

  onMovieCLick(movie:Movie){
    this.router.navigate(['/description', movie.id])
  }
}