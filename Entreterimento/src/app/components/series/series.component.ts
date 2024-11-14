import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import { CardComponent } from '../card/card.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { SeriesService } from '../../services/series.service';
import { Series } from '../../interfaces/series';
import {ReactiveFormsModule} from '@angular/forms';


@Component({
  selector: 'app-series',
  standalone: true,
  imports: [NavbarComponent,FormsModule,CardComponent,MatInputModule,MatButtonModule,ReactiveFormsModule],
  templateUrl: './series.component.html',
  styleUrl: './series.component.css'
})
export class SeriesComponent implements OnInit {
  formSerie = new FormGroup({
    nome: new FormControl('')
  });

  series: Series[] = [];
  constructor(private sService: SeriesService) {}

  ngOnInit(): void {
    this.getSeries();
  }
 
  addSerie(){
    this.sService.getSerie(this.formSerie.value.nome!).subscribe((x) => {
      if(x.Response != "False"){
        let adicionar: Series = {
          id: x.imdbID,
          imdbRating: x.imdbRating,
          Title: x.Title,
          Poster: x.Poster,
          totalSeasons: x.totalSeasons
        }
        this.sService.addSerie(adicionar).subscribe(() => {
          this.getSeries();
        });
      }
      
    })
  }

  getSeries(){
    this.sService.getAllseries().subscribe((x) => {
      this.series = x;
    });
  }
  
}
