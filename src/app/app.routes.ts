import { Routes } from '@angular/router';
import { Cv } from './cv/cv';
import { Home } from './home/home';

export const routes: Routes = [
  { path: '', component: Home, title: 'Mikołaj Karkowski — Full-stack .NET Engineer' },
  { path: 'cv', component: Cv, title: 'CV — Mikołaj Karkowski' },
  { path: '**', redirectTo: '' },
];
