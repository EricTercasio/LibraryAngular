import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookListComponent } from "./book-list/book-list/book-list.component";
import { BookFormComponent} from "./book-form/book-form/book-form.component";
import { SearchFormComponent} from "./search-book-form/search-form/search-form.component";
import {EditFormComponent} from "./edit-book-form/edit-form/edit-form.component";
import {BookPageComponent} from "./book-page/book-page.component";

const routes : Routes = [
  { path: 'books', component: BookListComponent },
  { path: 'addbook', component: BookFormComponent },
  { path : 'editbook', component: SearchFormComponent},
  { path : 'edit', component: EditFormComponent},
  { path : 'book', component : BookPageComponent}
];

 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
