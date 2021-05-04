import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoinCounterComponent } from './components/coin-counter/coin-counter.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: CoinCounterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
