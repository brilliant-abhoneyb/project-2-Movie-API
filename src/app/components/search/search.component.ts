import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DescriptionService } from '../../services/description.service';
import { Movie } from '../../interfaces/caretelera';
import { DescriptionPosterComponent } from '../../components/description-poster/description-poster.component';


@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, DescriptionPosterComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit {
  text='';
  movies:Movie[]=[];
  noMovie='';

  constructor(private activatedRoute:ActivatedRoute, private descriptionsSvc:DescriptionService){}
  
  ngOnInit(){
    this.activatedRoute.params.subscribe(params=>{

    this.text=params['text'];
    
    this.descriptionsSvc.searchPages(this.text).subscribe(movies=>{
      this.movies=movies;
      if(this.movies.length == 0){
        this.noMovie= '😌 The searched movie is not present, but it will appear';
      }
    })
    })
  }
}
