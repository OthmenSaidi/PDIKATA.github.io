import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() filterTitleEvent = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    // console.log(this.filterTitle);

  }
  getTitle(title: any) {
    // console.log(title);

    this.filterTitleEvent.emit(title)
  }

}
