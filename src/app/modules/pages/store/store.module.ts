import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FundComponent } from './fund/fund.component';
import { UsercardlistComponent } from './usercardlist/usercardlist.component';
import { BuycardsComponent } from './buycards/buycards.component';
import { LogComponent } from './log/log.component';
import { MaincontainerComponent } from './maincontainer/maincontainer.component';
import { AtomsModule } from 'src/app/components/atoms/atoms.module';
import { MoleculesModule } from 'src/app/components/molecules/molecules.module';
import { OrganismsModule } from 'src/app/components/organisms/organisms.module';
import { TemplatesModule } from 'src/app/components/templates/templates.module';
import { StoreRoutingModule } from "./store-routing.module";
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FundComponent,
    UsercardlistComponent,
    BuycardsComponent,
    LogComponent,
    MaincontainerComponent,

  ],
  imports: [
    CommonModule,
    AtomsModule,
    MoleculesModule,
    OrganismsModule,
    TemplatesModule,
   StoreRoutingModule,
   ReactiveFormsModule

  ],
  exports: [
    OrganismsModule,
    StoreRoutingModule,
  ]
})
export class StoreModule { }
