import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { ImprintComponent } from './imprint/imprint.component';
import { DataComponent } from './data/data.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
  },
  {
    path: 'imprint',
    component: ImprintComponent,
  },
  {
    path: 'data',
    component: DataComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
