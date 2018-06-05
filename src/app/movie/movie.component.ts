import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {Movie} from '../movie';


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  
  @Input() movie: Movie = new Movie();
  @Input() deleteMovieMode: boolean;
  @Output() movieSelectedToRemove : EventEmitter<Movie> = new EventEmitter();

  @Output() selectedMovie: EventEmitter<Movie> = new EventEmitter();
  

  constructor() { }

  ngOnInit() {
    
  }

  selectMovie(movie:Movie){
    this.selectedMovie.emit(movie);
  }

  removeMovie(movie) {
    debugger;
    this.movieSelectedToRemove.emit(movie);
  }

}
