import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  filterString: string;
  @Output() filterChanged : EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }


  changeMovieTitleFilter() {
    this.filterChanged.emit(this.filterString);
  }
}
