import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Movie } from 'src/app/movie.model';
import { MovieService } from 'src/app/services/movie.service';
import { EditMovieComponent } from '../edit-movie/edit-movie.component';


@Component({
  selector: 'app-display-movies',
  templateUrl: './display-movies.component.html',
  styleUrls: ['./display-movies.component.css']
})
export class DisplayMoviesComponent implements OnInit {
  movies!: Movie[];
  results!: Movie[];

  

  constructor( private movieService:MovieService,public dialog : MatDialog) { 
    
    
  }

  ngOnInit(): void {
    this.movieService.getAllMovies().subscribe(
      ( data: Movie[]) => this.movies =data
    )


    
  }

  OnEditMovie() {

    
     this.dialog.open(EditMovieComponent);
  }

  OnGetMoviesByTitle(title :string) {
    // console.log(this.result);
  
    this.results = this.movies.filter( movie => movie.originalTitle && movie.originalTitle.toLowerCase() === title.toLowerCase() )
    console.log(this.results);
   
  

  }
}
