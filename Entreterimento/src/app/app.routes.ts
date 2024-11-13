import { provideRouter, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FilmesComponent } from './components/filmes/filmes.component';
import { SeriesComponent } from './components/series/series.component';

export const routes: Routes = [
    {path: '',component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path:'filmes',component:FilmesComponent},
    {path:'series',component:SeriesComponent}
];

bootstrapApplication(AppComponent, {providers: [provideRouter(routes)]});
