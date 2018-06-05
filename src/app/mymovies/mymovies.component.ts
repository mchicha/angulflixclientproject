import { Component, OnInit, Input } from '@angular/core';
import {MoviesService} from '../movies.service';
import {Movie} from '../movie';

@Component({
  selector: 'app-mymovies',
  templateUrl: './mymovies.component.html',
  styleUrls: ['./mymovies.component.scss']
})

export class MymoviesComponent implements OnInit {
  
  title: string = 'Anguflix';
  @Input() movie: Movie = new Movie();
  public myMovies: Movie[];
  modeDelete: boolean = false;
  currentSearchFilter: string;

  constructor(private moviesService: MoviesService) { }

  ngOnInit() {
      this.myMovies = this.moviesService.getMyMovies();
  }

  setMyMoviesDeleteModeEnable() {
    this.modeDelete = !(this.modeDelete);
  }

  handleRemoveMovie(movie) {
    debugger;
    this.moviesService.removeMovie(movie);
  }

  handleSearchMovie(filterTerm: string) {
    this.currentSearchFilter = filterTerm;
  }

}
