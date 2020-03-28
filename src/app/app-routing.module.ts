import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RealtimeGeoqueryComponent } from './realtime-geoquery/realtime-geoquery.component';

const routes: Routes = [
  { path: '', component: RealtimeGeoqueryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
