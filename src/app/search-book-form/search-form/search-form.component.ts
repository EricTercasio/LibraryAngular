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

  book : Book

  constructor(private route : ActivatedRoute, private router : Router, private bookService : BookService) {}

  onSubmit(){
    this.bookService.getBookByISBN(this.book.isbn).subscribe(result =>{
      this.book = result;
      this.goToEditForm();
    });
  }

  goToEditForm(){
    this.router.navigate(['/edit'])
  }

}
