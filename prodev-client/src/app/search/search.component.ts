import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchTerm: string;
  @Output() searchEmiter =new EventEmitter<any>();

  constructor() { }

  newUser() {
    this.searchEmiter.emit(this.searchTerm);
  }

  ngOnInit(): void {
  }

}
