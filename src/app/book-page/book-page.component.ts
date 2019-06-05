import { Component, OnInit } from '@angular/core';
import {Book} from "../model/book";
import {BookService} from "../service/book.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Books} from "../model/books";

@Component({
  selector: 'app-book-page',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.css']
})
export class BookPageComponent implements OnInit {

  book : Book = new Book();
  books : Books = new Books();

  constructor(private bookService : BookService, private router : Router, private activatedRoute : ActivatedRoute) { }

  ngOnInit() {
    this.book = this.bookService.getBookPage();
    this.books = this.bookService.getBooksPage();
  }

  onCheckoutButton() {

  }

  onRemoveButton() {
    this.bookService.removeBook(this.book).subscribe(result =>{
      this.goToBook();
    });
  }

  goToBook(){
    this.router.navigate(['/books']);
  }
}
