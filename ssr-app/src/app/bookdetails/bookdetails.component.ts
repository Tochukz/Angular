import { Component, OnInit, } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Book } from './../models/book';
import { CategoryService } from './../services/category.service';

@Component({
  selector: 'app-bookdetails',
  templateUrl: './bookdetails.component.html',
  styleUrls: ['./bookdetails.component.scss']
})
export class BookdetailsComponent implements OnInit {

  book = new Book();

  constructor(
    private route: ActivatedRoute, 
    private categoryService: CategoryService, 
  ) { }

  ngOnInit() {
    const bookId = parseInt(this.route.snapshot.params.bookId);
    if (bookId) {
      this.categoryService.getBook(bookId).subscribe(book => {
        this.book = book;
      });
    }
  }

}
