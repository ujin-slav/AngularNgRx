import { Component } from '@angular/core';
import { OrgsService } from './services/orgs.service'
import {Orgs} from './Orgs'

@Component({
  selector: 'app-root',
  template:   `<div>
                <h1>Маршрутизация в Angular 13</h1>
                <router-outlet></router-outlet>
              </div>`,
})
export class AppComponent {
 
}
