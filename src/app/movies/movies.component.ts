import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Etudiant } from '../model/etudiant';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-etudiants',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies? : Etudiant[] ; 
  constructor(private movieService: MovieService,
              private router :Router) {
     //this.movies = movieService.listeMovies() ; 
   }

  /*ngOnInit(): void {
    
  }*/
  ngOnInit(): void {
    this.movieService.listeMovies().subscribe(etuds => {
    console.log(etuds);
    this.movies = etuds;
    });
    }
    
  supprimerProduit(m: Etudiant)
    {

      
      /*let conf = confirm("Etes-vous sûr ?");
      if (conf)
      this.movieService.supprimerMovie(m);*/
      let conf = confirm("Etes-vous sûr ?");
      if (conf)
      this.movieService.supprimerMovie(m.id).subscribe(() => {
      console.log("information d'un etudiant supprimé");
      });
      this.router.navigate(['movies']).then(() => {
      window.location.reload();

    });
  }
    


}
