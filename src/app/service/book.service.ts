import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Book } from '../model/book';
import { Books } from '../model/books';
// @ts-ignore
import { Observable } from 'rxjs/Observable';

@Injectable()
export class BookService {
  private bookUrl : string;
  private booksUrl : string;
  private editUrl : string;
  private isbnUrl : string;
  private removeUrl : string;
  private bookToEdit : Book;
  private bookPage : Book;
  constructor(private http: HttpClient) {
      this.bookUrl = 'http://localhost:8080/library/book'
      this.booksUrl = 'http://localhost:8080/library/books'
      this.editUrl = 'http://localhost:8080/library/edit/'
      this.isbnUrl = 'http://localhost:8080/library/book/'
      this.removeUrl = 'http://localhost:8080/library/remove'
  }

  public findAllBook(): Observable<Book[]> {
    return this.http.get<Book[]>(this.bookUrl);
  }
  public findAllBooks(): Observable<Books[]> {
    return this.http.get<Books[]>(this.booksUrl);
  }
  public editBook(isbn : string, book : Book) {
    return this.http.post<Book>(this.editUrl + isbn, book);
  }
  public getBookByISBN(isbn : string){
    return this.http.get<Book>(this.isbnUrl + isbn);
  }
  public addBook(book : Book){
    return this.http.post<Book>(this.bookUrl, book);
  }
  public setBookToEdit(book : Book){
    this.bookToEdit = book;
  }
  public getBookToEdit(){
    return this.bookToEdit;
  }

  setBookPage(book: Book) {
    this.bookPage = book;
  }
  public getBookPage(){
    return this.bookPage;
  }

  getBooksPage() {
    return undefined;
  }

  removeBook(book: Book) {
    return this.http.post<Book>(this.removeUrl,book);

  }
}

