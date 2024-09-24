import { Injectable, inject } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MovieDetails } from '../interfaces/movie-details';


const apiUrl = environment.apiUrl;
const apiKey = environment.apiKey;


@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private http = inject(HttpClient);

  constructor() { }
  
  getMovies() : Observable<MovieDetails> {
    return this.http.get<MovieDetails>(apiUrl+'?api_key='+apiKey);
  }
}
