import { Injectable } from '@angular/core';
import { Etudiant } from '../model/etudiant';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};
@Injectable({
  providedIn: 'root'
})
export class MovieService {
  apiURL: string = 'http://localhost:8080/etudiants/api';
  etudiant :Etudiant[] ; 
  movie: Etudiant={} ;
  x :Etudiant|undefined ; 

 
  
  consulterMovie(id:number):  Observable<Etudiant> {
    const url = `${this.apiURL}/${id}`;
    return this.http.get<Etudiant>(url);

    /*this.x= this.etudiant.find(m => m.id == id);
    this.movie ={id : this.x.id,
                nom :this.x?.nom,
                moy: this.x?.moy,
                date:this.x?.date};*/
    
    }
 // movie: Movie;
  constructor(private http : HttpClient) {
    this.etudiant = [
      {id : 1, nom : "deadpool", moy : 50.000, date : new Date("01/14/2019")},
      {id : 2, nom : "Harry Potter", moy : 70.000, date : new Date("01/14/2005")},
      {id : 3, nom : "TED", moy : 35.000, date : new Date("01/14/2010")},
  ] ;
   }
  /* listeMovies():Etudiant[] {
    return this.etudiant;
  }*/
  listeMovies(): Observable<Etudiant[]>{
    return this.http.get<Etudiant[]>(this.apiURL);
    }
  /*ajouterMovies(m:Etudiant){
    this.etudiant.push(m) ; 
  }*/
  ajouterMovies( prod: Etudiant):Observable<Etudiant>{
    return this.http.post<Etudiant>(this.apiURL, prod, httpOptions);
    }

    supprimerMovie(id? : number) {
      const url = `${this.apiURL}/${id}`;
      return this.http.delete(url, httpOptions);
      }
 /*     
  supprimerMovie(m: Etudiant){
     for ( const element of this.etudiant){
       if (element.id==m.id){
        const index = this.etudiant.indexOf(element);
        if (index > -1) {
          this.etudiant.splice(index, 1);
        }
        break ; 
       }
     }
    //this.movie =  {idMovie : m.idMovie , nomMovie : m.nomMovie, prixMovie : m.prixMovie, dateCreation : m.dateCreation} ; 
    //supprimer le produit prod du tableau produits
   /* console.log("delete",this.movie) ;
    const index = this.movies.indexOf(m);
    console.log('index is : ' , index) ; 
    if (index > -1) {
      this.movies.splice(index, 1);
    
    }*/
    //ou Bien
    /* this.produits.forEach((cur, index) => {
    if(prod.idProduit === cur.idProduit) {
    this.produits.splice(index, 1);
    }
    }); */


    trierMovies(){
      //this.movies.sort((a, b) => (a.idMovie > b.idMovie) ? 1 : -1)
      
    }
    updateMovie(m:Etudiant)
    {
      return this.http.put<Etudiant>(this.apiURL, m, httpOptions);
      
    
    }
   
   
      
    
      
}
