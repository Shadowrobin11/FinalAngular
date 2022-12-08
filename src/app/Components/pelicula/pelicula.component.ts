import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { pelicula } from 'src/app/modelo/pelicula';
import { PeliculasServiceService } from 'src/app/servicios/peliculas-service.service';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {
  private id:any;
  public Pelicula!:pelicula;
  public imagen:any = "https://image.tmdb.org/t/p/w500";
  constructor(private route:ActivatedRoute,private service:PeliculasServiceService) { }

  ngOnInit(): void {

    this.cogerPeli();


  }

  cogerPeli(){
    this.id = this.route.snapshot.paramMap.get('id');
    this.Pelicula = new pelicula();
    this.service.gePeliculaforId(this.id).subscribe((data:any)=>{
      this.Pelicula.titulo = data.title;
      this.Pelicula.fecha = data.release_date;
      this.Pelicula.resumen = data.overview;
      this.Pelicula.imagen = data.poster_path;
      this.Pelicula.nota = data.vote_average;
      console.log(this.Pelicula);
    })
  }

}
