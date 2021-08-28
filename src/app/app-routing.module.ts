import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { PokemonViewComponent } from './components/pokemon-view/pokemon-view.component';

const routes: Routes = [
  { path: '',
    component: PokemonListComponent
  },
  {
    path: 'view/:name',
    component: PokemonViewComponent
  },
  {
    path: '**',
    component: PokemonListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'top'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
