import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'briefing', pathMatch: 'full'},
  // lazy loaded modules
  { path: 'briefing', loadChildren: () => import('./modules/briefing/briefing.module').then(m => m.BriefingModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
