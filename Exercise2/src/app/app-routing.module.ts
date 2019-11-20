import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from '../app/home/home.component';
import {AboutComponent} from '../app/about/about.component'
import { PersonalComponent } from './personal/personal.component';
import { BetsComponent } from './bets/bets.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home', component: HomeComponent},
  {path:'about',component: AboutComponent},
  {path: 'personal',component: PersonalComponent},
  {path: 'Bets', component: BetsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
