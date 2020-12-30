import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Etudiant } from '../model/etudiant';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-add-movies',
  templateUrl: './add-movies.component.html',
  styleUrls: ['./add-movies.component.css']
})
export class AddMoviesComponent implements OnInit {

  newMovie = new Etudiant();
  message!: string; 

  constructor(private movieService: MovieService,
              private router :Router) { }

  addMovie(){
    /*this.movieService.ajouterMovies(this.newMovie) ; 
    this.message = "Movie" + this.newMovie.nom + "ajouté avec succés" ;*/
    this.movieService.ajouterMovies(this.newMovie)
    .subscribe(prod => {
    console.log(prod);
    });
    this.router.navigate(['movies']);
    }
  ngOnInit(): void {
  }

}
