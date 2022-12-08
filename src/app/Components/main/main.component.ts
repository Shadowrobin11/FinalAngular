import { Component, OnInit,Input } from '@angular/core';
import { Route, Router } from '@angular/router';
import { PeliculasServiceService } from 'src/app/servicios/peliculas-service.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  public imagen:any = "https://image.tmdb.org/t/p/w500";
  public page:any = 1;
  public peliculas:any[] = [];
  public titulo:string = "Mas vistas";
  constructor(private service:PeliculasServiceService , private router:Router) { }

  ngOnInit(): void {
    this.getpeliculasmasvistas();
  }

  getpeliculasmasvistas(){
    this.page = 1;
    this.service.getpeliculas(this.page).subscribe((data:any)=>{
      this.peliculas = data.results;
      this.titulo = "Mas vistas";
    })
  }

  adelante(){
    this.page = this.page + 1;
    this.service.getpeliculas(this.page).subscribe((data:any)=>{
      this.peliculas = data.results;
    }
    )
  }

  atras(){
    if(this.page > 1){
      this.page = this.page - 1;
      this.service.getpeliculas(this.page).subscribe((data:any)=>{
        this.peliculas = data.results;
      }
      )
    }else{
      return;
    }

  }

  getPeliculasComedia(){
    this.page = 1;
    this.service.getPeliculasComedia(this.page).subscribe((data:any)=>{
      this.peliculas = data.results;
      this.titulo = "de comedia";
    })
  }

  getPeliculasDrama(){
    this.page = 1;
    this.service.getPeliculasDrama(this.page).subscribe((data:any)=>{
      this.peliculas = data.results;
      this.titulo = "de drama";
    })
  }

  getPeliculasTeatro(){
    this.page = 1;
    this.service.getPeliculasTeatro(this.page).subscribe((data:any)=>{
      this.peliculas = data.results;
      this.titulo = "de teatro";
    })
  }

  cogerPeli(id:any){
    this.router.navigate(['/pelicula',id]);
  }

}
