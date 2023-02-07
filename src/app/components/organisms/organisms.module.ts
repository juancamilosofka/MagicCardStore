import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormframeComponent } from './formframe/formframe.component';
import { MoleculesModule } from '../molecules/molecules.module';
import { AtomsModule } from '../atoms/atoms.module';
import { HeaderComponent } from './header/header.component';
import {RouterModule} from '@angular/router';
import { CardlistcontainerComponent } from './cardlistcontainer/cardlistcontainer.component';
import { ListcontainerComponent } from './listcontainer/listcontainer.component';
import { SimpleformComponent } from './simpleform/simpleform.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FormframeComponent,
    HeaderComponent,
    CardlistcontainerComponent,
    ListcontainerComponent,
    SimpleformComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    RouterModule,
    AtomsModule,
    MoleculesModule
  ],
  exports: [
    FormframeComponent,
    HeaderComponent,
    CardlistcontainerComponent,
    ListcontainerComponent,
    SimpleformComponent

  ]
})
export class OrganismsModule { }
