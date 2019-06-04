import { Component, OnInit } from '@angular/core';
import {Book} from "../../model/book";
import {BookService} from "../../service/book.service";

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent implements OnInit{

  book : Book

  constructor(private bookService : BookService) { }

  ngOnInit() {
    this.book = this.bookService.getBookToEdit();
  }

}
