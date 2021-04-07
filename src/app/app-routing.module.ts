import { NgModule } from '@angular/core'
import { Routes, RouterModule, PreloadAllModules } from '@angular/router'

const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () => import('./modules/admin/admin.module').then((m) => m.AdminModule),
  },
  { path: 'employee', loadChildren: () => import('./modules/employee/employee.module').then((m) => m.EmployeeModule) },
  {
    path: 'manager',
    loadChildren: () => import('./modules/manager/manager.module').then((m) => m.ManagerModule),
  },
  {
    path: '',
    redirectTo: 'employee',
    pathMatch: 'full',
  },
]
@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
