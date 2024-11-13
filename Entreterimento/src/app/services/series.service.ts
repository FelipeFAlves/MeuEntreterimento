import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Series } from '../interfaces/series';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {
  url = 'http://www.omdbapi.com/?t';
  bdSeries = `http://localhost:3000/series`;
  constructor(private http: HttpClient) { }

  getSerie(serie: string){
    return this.http.get<any>(this.url+`=${serie}&apikey=881a9e6e`);
  }

  addSerie(serie: Series){
    return this.http.post(this.bdSeries,serie);
  }

  getAllseries(){
    return this.http.get<Series[]>(this.bdSeries);
  }
  deleteSerie(id:string){
    return this.http.delete(`${this.bdSeries}/${id}`);
  }
}
