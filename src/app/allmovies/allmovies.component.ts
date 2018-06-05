import { Component, OnInit, Output } from '@angular/core';
import {MoviesService} from '../movies.service';
import {Movie} from '../movie';

@Component({
  selector: 'app-allmovies',
  templateUrl: './allmovies.component.html',
  styleUrls: ['./allmovies.component.scss']
})
export class AllmoviesComponent implements OnInit {

    @Output() movie: Movie = new Movie();
    public allMovies: Movie[];
    currentSearchFilter: string;

    constructor(private moviesService: MoviesService) {
        this.allMovies = moviesService.getAllMovies();
    }

    ngOnInit() {
    }

    handleAddMovieToMyMovies(movie) {
        this.moviesService.addMovie(movie);
    }

    handleSearchMovie(filterTerm: string) {
        this.currentSearchFilter = filterTerm;
    }

}
