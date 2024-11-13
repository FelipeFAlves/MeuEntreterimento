import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FilmesService } from '../../services/filmes.service';
import { FormsModule } from '@angular/forms';
import { Filme } from '../../interfaces/filme';
import { CardComponent } from '../card/card.component';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-filmes',
  standalone: true,
  imports: [NavbarComponent,FormsModule,CardComponent,MatInputModule,MatButtonModule],
  templateUrl: './filmes.component.html',
  styleUrl: './filmes.component.css'
})
export class FilmesComponent implements OnInit{
  constructor(private fService: FilmesService) {}
  nome: string = '';
  filmes: Filme[] = [];

  ngOnInit(): void {
    this.listaFilmes();
  }

  filme(){
    this.fService.getFilmes(this.nome).subscribe((x) => {
      if(x.Response != "False"){
        let adicionar: Filme = {
          id: x.imdbID,
          imdbRating: x.imdbRating,
          Title: x.Title,
          Runtime: x.Runtime,
          Poster: x.Poster
        };
        this.fService.addFilme(adicionar).subscribe(() => this.listaFilmes());
      }
    }
    );
  }

  listaFilmes(){
    this.fService.listaFilmes().subscribe((x) => {
      this.filmes = x;
    });
  }
}
