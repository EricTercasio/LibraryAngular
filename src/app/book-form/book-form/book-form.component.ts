import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Book} from "../../model/book";
import { BookService } from "../../service/book.service";

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent {

  book : Book;

  constructor(private route : ActivatedRoute, private router : Router, private bookService : BookService) {
    this.book = new Book();
  }

  onSubmit(){
    this.bookService.addBook(this.book).subscribe(result =>{
      this.bookService.setBookToEdit(result);
      this.goToBookList()
    });
  }

  goToBookList(){
    this.router.navigate(['/books'])
  }

}
