import { Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { ImprintComponent } from './imprint/imprint.component';
import { DataComponent } from './data/data.component';

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
