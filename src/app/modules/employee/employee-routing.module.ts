import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { EmployeeComponent } from './employee.component'
import { WorkReportsComponent } from './components/work-reports/work-reports.component'

const routes: Routes = [
  { path: '', component: EmployeeComponent },
  {
    path: 'work-reports',
    component: WorkReportsComponent,
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeeRoutingModule {}
