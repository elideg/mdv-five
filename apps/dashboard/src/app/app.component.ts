import { Component } from '@angular/core';

@Component({
  selector: 'mdv-five-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mdv-five';

  links = [
    { path: '/project', icon: 'work', title: 'Projects' }
  ]
}
