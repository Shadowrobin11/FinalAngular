import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PeliculasServiceService {

  constructor(private router:HttpClient) { }

  getpeliculas(pagina:any){
    return this.router.get('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=0b76fd8ce97b175b609d325162e68032&page='+pagina)
  }

  getPeliculasComedia(pagina:any){
    return this.router.get('https://api.themoviedb.org/3/discover/movie?with_genres=35&sort_by=popularity.desc&api_key=0b76fd8ce97b175b609d325162e68032&page='+pagina);
  }

  getPeliculasTeatro(pagina:any){
    return this.router.get('https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22&api_key=0b76fd8ce97b175b609d325162e68032&page='+pagina);
  }

  getPeliculasDrama(pagina:any){
    return this.router.get('https://api.themoviedb.org/3/discover/movie?with_genres=18&sort_by=popularity.desc&api_key=0b76fd8ce97b175b609d325162e68032&page='+pagina);
  }

  getPeliculasNinos(pagina:any){
    return this.router.get('https://api.themoviedb.org/3/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=0b76fd8ce97b175b609d325162e68032&page='+pagina)
  }
  gePeliculaforId(id:any){
    return this.router.get(`https://api.themoviedb.org/3/movie/${id}?api_key=0b76fd8ce97b175b609d325162e68032`)
  }
}
