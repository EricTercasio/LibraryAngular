import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Book} from "../../model/book";
import { BookService } from "../../service/book.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent {

  book : Book;
  error : boolean = false;

  constructor(private route : ActivatedRoute, private router : Router, private bookService : BookService) {
    this.book = new Book();
  }

  onSubmit(){
    this.bookService.addBook(this.book).subscribe(result =>{
      this.goToBookList();
    },(err:HttpErrorResponse)=>{this.error = true;});
  }

  goToBookList(){
    this.router.navigate(['/books'])
  }

}
