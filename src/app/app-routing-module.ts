import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { About } from './components/about/about';
import { Home } from './components/home/home';

const routes: Routes = [
  {
  path:"",
  component:Home
},
{
  path:"about",
  component:About
},
  { path: 'cards', loadChildren: () => import('./cards/cards-module').then(m => m.CardsModule) }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
