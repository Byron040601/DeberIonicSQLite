import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaginaDeberPage } from './pagina-deber.page';

const routes: Routes = [
  {
    path: '',
    component: PaginaDeberPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaginaDeberPageRoutingModule {}
