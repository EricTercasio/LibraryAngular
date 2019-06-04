import { Component, OnInit } from '@angular/core';
import { Book } from '../../model/book';
import { Books} from "../../model/books";
import { BookService} from "../../service/book.service";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books : Book[]

  constructor(private bookService : BookService) { }

  ngOnInit() {
    this.bookService.findAllBook().subscribe(data => {
      this.books = data;
    })
  }

}
