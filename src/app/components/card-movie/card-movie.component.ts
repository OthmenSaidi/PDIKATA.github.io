import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Movie } from 'src/app/movie.model';
import {MatDialog} from '@angular/material/dialog';
// import { EditMovieComponent } from '../edit-movie/edit-movie.component';


@Component({
  selector: 'app-card-movie',
  templateUrl: './card-movie.component.html',
  styleUrls: ['./card-movie.component.css']
})
export class CardMovieComponent implements OnInit {
  @Input() movie! : Movie;
  @Output() editEventEmitter = new EventEmitter();
  id:string ='';


  constructor( public dialog : MatDialog) { }

  ngOnInit(): void {
    this.id = this.movie.tconst
  }
  OpenDialog(){
    console.log('click on card edit');
    
     this.editEventEmitter.emit('this id is '+this.id);

    // this.dialog.open(EditMovieComponent);
  }
}
