import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { EmployeeComponent } from './employee.component'
import { WorkReportsComponent } from './components/work-reports/work-reports.component'
import { EmployeeRoutingModule } from './employee-routing.module'

@NgModule({
  imports: [CommonModule, EmployeeRoutingModule],
  declarations: [EmployeeComponent, WorkReportsComponent],
})
export class EmployeeModule {}
