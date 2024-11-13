import { Component, Input, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { Filme } from '../../interfaces/filme';
import { ActivatedRoute } from '@angular/router';
import { Series } from '../../interfaces/series';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { SeriesService } from '../../services/series.service';
import { FilmesService } from '../../services/filmes.service';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatCardModule,MatIconModule,MatButtonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit{
  @Input()filme?: Filme;
  @Input()serie?: Series;
  tipo = true; // true = filme | false = serie

  constructor(private sService: SeriesService, private route: ActivatedRoute, private fServive: FilmesService) {}
  
  ngOnInit(): void {
    this.route.url.subscribe((url: any) => {
      if(url[0].path === "series"){
        this.tipo = false;
      }
    });
  }

  deleteSerie(id:string){
    this.sService.deleteSerie(id).subscribe(() => {
      window.location.reload();
    });
  }
  deleteFilme(id:string){
    this.fServive.deleteFilme(id).subscribe(() => {
      window.location.reload();
    });
  }

}
