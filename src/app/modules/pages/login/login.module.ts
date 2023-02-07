import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './logincomponent/login.component';
import { AtomsModule } from 'src/app/components/atoms/atoms.module';
import { MoleculesModule } from 'src/app/components/molecules/molecules.module';
import { OrganismsModule } from 'src/app/components/organisms/organisms.module';
import { TemplatesModule } from 'src/app/components/templates/templates.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { StoreRoutingModule } from '../store/store-routing.module';
import { LoginRoutingModule } from './login-routing.module';



@NgModule({
  declarations: [

    LoginComponent
  ],
  imports: [
    CommonModule,
    AtomsModule,
    MoleculesModule,
    OrganismsModule,
    TemplatesModule,
   // StoreRoutingModule,
    LoginRoutingModule,
    provideAuth(() => getAuth()),
  ],
  exports: [
    LoginComponent,
    LoginRoutingModule,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class LoginModule { }
