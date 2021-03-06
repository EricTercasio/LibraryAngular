import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BookService } from './service/book.service';
import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list/book-list.component';
import { BookFormComponent } from './book-form/book-form/book-form.component';
import { SearchFormComponent } from './search-book-form/search-form/search-form.component';
import { EditFormComponent } from './edit-book-form/edit-form/edit-form.component';
import { BookPageComponent } from './book-page/book-page.component';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookFormComponent,
    SearchFormComponent,
    EditFormComponent,
    BookPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
