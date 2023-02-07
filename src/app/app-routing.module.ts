import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/pages/login/logincomponent/login.component';

import { FundComponent } from './modules/pages/store/fund/fund.component';
import { LogComponent } from './modules/pages/store/log/log.component';
import { MaincontainerComponent } from './modules/pages/store/maincontainer/maincontainer.component';
import { UsercardlistComponent } from './modules/pages/store/usercardlist/usercardlist.component';
import { AuthGuard } from './services/guards/auth.guard';
import {canActivate, redirectLoggedInTo,redirectUnauthorizedTo} from '@angular/fire/auth-guard'
//import { BuycardsComponent } from './modules/pages/store/buycards/buycards.component';

const routes: Routes = [
  { path: '', //component: LoginComponent
  ...canActivate(() => redirectLoggedInTo(['main/Buy_Cards'])),
  loadChildren: () =>
  import('./modules/pages/login/login.module').then(m => m.LoginModule),
 },

  {
    path: 'main',
    ...canActivate(() => redirectUnauthorizedTo([''])),
    loadChildren: () =>
    import('./modules/pages/store/store.module').then(m => m.StoreModule),
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
