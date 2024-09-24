import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { CarteleraResponse, Movie } from '../interfaces/caretelera';
import { MovieDetails } from '../interfaces/movie-details';
import { Cast, Credits } from '../interfaces/credits';

@Injectable({
  providedIn: 'root'
})
export class DescriptionService {

  private URL='https://api.themoviedb.org/3';
  private apiKey = '221ad888b776f88c2e38a8b2d413fd69';
  private headers={Authorization:`Bearer ${this.apiKey}`};
  private cartelePage = 1;
  public load = false;

  
  constructor(private http:HttpClient) { }
  getCartelera():Observable<Movie[]>{
    if (this.load) {
      return of([]);
    }
    console.log(this.headers)
    this.load=true;

    return this.http.get<CarteleraResponse>(`${this.URL}/movie/now_playing?language=en-EN&page=${this.cartelePage}&api_key=${this.apiKey}`, {headers: this.headers}).pipe(
      map((response:any)=> response.results),
      tap(()=>{
        this.cartelePage+=1;
        this.load=false;
      })
    )
  }
  
  searchPages(text:string):Observable<Movie[]>{
    return this.http.get<CarteleraResponse>(`${this.URL}/search/movie?query=${text}&language=en-EN&page=1&api_key=${this.apiKey}`,{headers:this.headers}).pipe(
      map(res=>res.results)
    )
  }

  descriptionDetalle(id:string){
    return this.http.get<MovieDetails>(`${this.URL}/movie/${id}?language=en-EN&api_key=${this.apiKey}`,{headers:this.headers}).pipe(
      catchError(err=> of(null))
    )
  }

  descriptionCreditos(id:string):Observable<Cast[] | null>{
    return this.http.get<Credits>(`${this.URL}/movie/${id}/credits?language=en-EN&api_key=${this.apiKey}`,{headers:this.headers}).pipe(
      map(res=>res.cast),
      catchError(err=> of(null))
      )
  }

  resetDescriptionPage(){
    this.cartelePage = 1;
  }
}