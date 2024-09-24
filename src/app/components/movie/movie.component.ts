import { Component, OnInit, inject,  HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MovieService } from '../../services/movie.service';
import { MovieDetails } from '../../interfaces/movie-details';
import { environment } from '../../../environments/environment';
import { HeaderComponent } from '../header/header.component';
import { DescriptionPosterComponent } from '../description-poster/description-poster.component';


const imgUrl = environment.imgUrl; 

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [CommonModule, DescriptionPosterComponent, HeaderComponent],
  templateUrl: '././movie.component.html',
  styleUrl: './movie.component.css'
})
export class MovieComponent implements OnInit {
  private movieService = inject(MovieService)

  movies: MovieDetails[] = [];

  ngOnInit(): void {
    this.loadMovies();
  }

  loadMovies(){
    this.movieService.getMovies().subscribe({
      next : (res: any) => {
        this.movies = res.results as MovieDetails[];
        console.log(res.results);
      },
      error:(error) => console.log('Error fetching movies:', error)
    });
  }

  getFullImageUrl(posterPath: String) : String{
    return imgUrl + posterPath;
  }

  constructor(private router:Router){}
  onMovieCLick(movie:MovieDetails){
    this.router.navigate(['/description', movie.id])
  }
}