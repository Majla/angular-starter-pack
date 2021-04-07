import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout'
import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isMobile = false

  constructor(breakpointObserver: BreakpointObserver) {
    const layoutChanges = breakpointObserver.observe([Breakpoints.XSmall])

    layoutChanges.subscribe((result) => {
      if (result.matches) {
        this.isMobile = true
      } else {
        this.isMobile = false
      }
    })
  }
}
