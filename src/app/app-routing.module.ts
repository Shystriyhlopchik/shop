import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'ordering',
    pathMatch: 'full'
  },
  {
    path: 'catalog',
    loadChildren: () => import('./libs/pages/catalog/catalog.module').then(m => m.CatalogModule)
  },
  {
    path: 'registration',
    loadChildren: () => import('./libs/pages/registration/registration.module').then(m => m.RegistrationModule)
  },
  {
    path: 'ordering',
    loadChildren: () => import('./libs/pages/ordering/ordering.module').then(m => m.OrderingModule)
  },
  {
    path: 'not-found',
    component: NotFoundComponent
  },
  {
    path: '**',
    redirectTo: 'not-found'
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
