import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimarybuttonComponent } from './primarybutton/primarybutton.component';
import { PrimaryinputComponent } from './primaryinput/primaryinput.component';
import { PrimarytextComponent } from './primarytext/primarytext.component';
import { PrimaryttittleComponent } from './primaryttittle/primaryttittle.component';
import { PrimarytsubtittleComponent } from './primarytsubtittle/primarytsubtittle.component';
import { PrimaryimageComponent } from './primaryimage/primaryimage.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SecondarybuttonComponent } from './secondarybutton/secondarybutton.component';
import { SecondaryinputComponent } from './secondaryinput/secondaryinput.component';


@NgModule({
  declarations: [
    PrimarybuttonComponent,
    PrimaryinputComponent,
    PrimarytextComponent,
    PrimaryttittleComponent,
    PrimarytsubtittleComponent,
    PrimaryimageComponent,
    SecondarybuttonComponent,
    SecondaryinputComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    PrimarybuttonComponent,
    PrimaryinputComponent,
    PrimarytextComponent,
    PrimaryttittleComponent,
    PrimarytsubtittleComponent,
    PrimaryimageComponent,
    SecondarybuttonComponent,
    SecondaryinputComponent
  ]
})
export class AtomsModule { }
