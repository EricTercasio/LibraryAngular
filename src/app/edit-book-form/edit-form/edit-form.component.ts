import { Component, OnInit } from '@angular/core';
import {Book} from "../../model/book";
import {BookService} from "../../service/book.service";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent implements OnInit{

  book : Book = new Book();
  error : boolean = false;

  constructor(private bookService : BookService, private router : Router, private activatedRoute : ActivatedRoute) {
  }

  ngOnInit() {
    this.book = this.bookService.getBookToEdit();
  }

  onSubmit(){
    this.bookService.editBook(this.book.isbn, this.book).subscribe(result =>{
      this.goToBookList()
    },error1 =>{
      this.error = true;
    })
  }


  goToBookList(){
    this.router.navigate(['/books'])
  }

}
