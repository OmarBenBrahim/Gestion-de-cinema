import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Etudiant } from '../model/etudiant';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-update-movie',
  templateUrl: './update-movie.component.html',
  styles: [
  ]
})
export class UpdateMovieComponent implements OnInit {
  
  currentMovie=new Etudiant() ;
  
  
  constructor(private activatedRoute: ActivatedRoute,
              private movieService: MovieService,
              private router :Router){}
 
  ngOnInit(): void {
    this.movieService.consulterMovie(this.activatedRoute.snapshot.params.id).
 subscribe( prod =>{ this.currentMovie = prod; } ) ;
  }
  updateMovie(){
    /*this.movieService.updateMovie(this.currentMovie);
    this.router.navigate(['movies']);*/
    this.movieService.updateMovie(this.currentMovie).subscribe(prod => {
      this.router.navigate(['movies']);
      },(error) => { alert("Problème lors de la modification !"); }
      );
      
  }
}
