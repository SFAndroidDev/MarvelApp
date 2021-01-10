import { SuperteamComponent } from './components/superteam/superteam.component';
import { CharactersComponent } from './components/characters/characters.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path:'', redirectTo:'/characters', pathMatch: 'full'
  },
  {
    path:'characters', component: CharactersComponent
  },
  {
    path:'superteam', component: SuperteamComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
