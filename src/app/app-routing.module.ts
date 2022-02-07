import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovimentosHomeComponent } from './components/movimentos-home/movimentos-home.component';

const routes: Routes = [
  { path: '', component: MovimentosHomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
