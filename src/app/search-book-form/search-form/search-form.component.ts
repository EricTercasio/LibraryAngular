import { Component, OnInit } from '@angular/core';
import {Book} from "../../model/book";
import {BookService} from "../../service/book.service";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent {

  book : Book;
  error : boolean = false;

  constructor(private route : ActivatedRoute, private router : Router, private bookService : BookService) {
    this.book = new Book();
  }

  onSubmit(){
    this.bookService.getBookByISBN(this.book.isbn).subscribe(result =>{
      if(result == null){
        this.error = true;
      }else {
        this.book = result;
        this.bookService.setBookToEdit(this.book);
        this.goToEditForm();
      }
    });
  }

  goToEditForm(){
    this.router.navigate(['/edit'])
  }

}
