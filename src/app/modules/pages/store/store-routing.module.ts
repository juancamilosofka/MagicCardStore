
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BuycardsComponent } from "./buycards/buycards.component";
import { FundComponent } from "./fund/fund.component";
import { LogComponent } from "./log/log.component";
import { MaincontainerComponent } from "./maincontainer/maincontainer.component";
import { UsercardlistComponent } from "./usercardlist/usercardlist.component";
import {canActivate, redirectLoggedInTo,redirectUnauthorizedTo} from '@angular/fire/auth-guard'

const routes: Routes = [

   {
    path: '',
  component: MaincontainerComponent,
  children: [
    {
      path: 'Buy_Cards',
      component: BuycardsComponent,

     },
     {
      path: 'Fund',
      component: FundComponent
     },
     {
      path: 'Your_Cards',
      component: UsercardlistComponent
     },
     {
      path: 'Log',
      component: LogComponent
     }
    ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StoreRoutingModule {}
