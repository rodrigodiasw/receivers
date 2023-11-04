import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ReceiverListComponent } from "./component/receiver-list/receiver-list.component";
const routes: Routes = [
  { path: '', redirectTo: '/receivers', pathMatch: 'full' },
  { path: 'receivers', component: ReceiverListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
