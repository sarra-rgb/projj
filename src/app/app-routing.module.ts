import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeListComponent } from './home-list/home-list.component';
import { HomeList2Component } from './home-list2/home-list2.component';
import { HomeList3Component } from './home-list3/home-list3.component';


const routes: Routes = [
  { path: 'homelist', component: HomeListComponent },
  { path: 'homelist2', component: HomeList2Component },
  { path: 'homelist3', component: HomeList3Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
