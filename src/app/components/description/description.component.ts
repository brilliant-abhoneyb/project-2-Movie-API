import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { DescriptionService } from '../../services/description.service';
import { MovieDetails } from '../../interfaces/movie-details';
import { combineLatest } from 'rxjs';
import { Cast } from '../../interfaces/credits';
import { PipesModule } from '../../pipes/pipes.module';
import { HeaderComponent } from '../header/header.component';


@Component({
  selector: 'app-description',
  standalone: true,
  imports: [CommonModule, PipesModule, HeaderComponent ],
  templateUrl: './description.component.html',
  styleUrl: './description.component.css'
})
export class DescriptionComponent implements OnInit {

  description?:MovieDetails;
  cast : Cast[] =[];
  
  constructor(private activatedRoute:ActivatedRoute, private descriptionsSvc:DescriptionService){}
  
  ngOnInit() {
    const {id} = this.activatedRoute.snapshot.params;

    combineLatest([
      this.descriptionsSvc.descriptionDetalle(id),
      this.descriptionsSvc.descriptionCreditos(id)

    ]).subscribe(([movie,cast])=>{

      if (movie === null || cast === null) {
        console.error('Error');
        return;
      }

      this.description= movie;
      this.cast = cast;
    })
  }

  getStars(voteAverage:number){
    const starsCount = Math.floor(voteAverage);
    return Array(starsCount).fill(0);

  }


  regresar(){
    window.history.back();
  }
}
