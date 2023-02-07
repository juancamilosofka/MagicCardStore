import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardinfocontainerComponent } from './cardinfocontainer/cardinfocontainer.component';
import { ContencardComponent } from './contencard/contencard.component';
import { DetailcardComponent } from './detailcard/detailcard.component';
import { AtomsModule } from '../atoms/atoms.module';



@NgModule({
  declarations: [
    CardinfocontainerComponent,
    ContencardComponent,
    DetailcardComponent

  ],
  imports: [
    CommonModule,

    AtomsModule
  ],
  exports: [
    CardinfocontainerComponent,
    ContencardComponent,
    DetailcardComponent

  ]
})
export class MoleculesModule { }
