import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  constructor(private moviesService: MoviesService) { 
    
  }

  ngOnInit() {
   
  }

  get budget() {
    return this.moviesService.getBudget();
  }
}
