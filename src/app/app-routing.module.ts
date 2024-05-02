import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'paciente-list',
    loadChildren: () => import('./paciente/paciente-list/paciente-list.module').then( m => m.PacienteListPageModule)
  },
  {
    path: 'paciente-edit/:id',
    loadChildren: () => import('./paciente/paciente-edit/paciente-edit.module').then( m => m.PacienteEditPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
