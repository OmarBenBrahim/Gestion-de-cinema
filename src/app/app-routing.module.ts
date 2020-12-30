import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { AddMoviesComponent } from './add-movies/add-movies.component';
import { UpdateMovieComponent } from './update-movie/update-movie.component';

const routes: Routes = [
  {path : "movies",component:MoviesComponent},
  {path : "add_movies" , component:AddMoviesComponent},
  {path: "", redirectTo: "movies", pathMatch: "full"},
  {path : "updateMovie/:id" , component:UpdateMovieComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
