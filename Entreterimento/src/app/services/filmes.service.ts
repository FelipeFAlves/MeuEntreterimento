import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Filme } from '../interfaces/filme';
@Injectable({
  providedIn: 'root'
})
export class FilmesService {
  url = 'http://www.omdbapi.com/?t';
  bdFilmes = `http://localhost:3000/filmes`;

  constructor(private http: HttpClient) { }

  getFilmes(filme:string){
    return this.http.get<any>(this.url+`=${filme}&apikey=881a9e6e`);
  }

  addFilme(filme: Filme) {
    return this.http.post(this.bdFilmes,filme);
  }

  listaFilmes(){
    return this.http.get<Filme[]>(this.bdFilmes);
  }

  deleteFilme(id:string){
    return this.http.delete(`${this.bdFilmes}/${id}`)
  }
}
