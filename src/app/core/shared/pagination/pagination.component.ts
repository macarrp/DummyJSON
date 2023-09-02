import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  
  @Input() totalElements = 0;
  @Input() elementsToDisplay = 10;

  @Output() pageClicked = new EventEmitter<number>();

  totalPages = 0;
  pagesArray: Array<number> = [];

  ngOnInit(): void {
    this.totalPages = Math.floor(this.totalElements / this.elementsToDisplay)
    this.pagesArray = new Array(this.totalPages);
  }

  cargarPagina(page : number) {
    this.pageClicked.emit(page);
  }
}
