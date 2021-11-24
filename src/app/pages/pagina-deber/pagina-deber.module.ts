import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaginaDeberPageRoutingModule } from './pagina-deber-routing.module';

import { PaginaDeberPage } from './pagina-deber.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaginaDeberPageRoutingModule
  ],
  declarations: [PaginaDeberPage]
})
export class PaginaDeberPageModule {}
