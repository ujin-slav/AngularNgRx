import { Component } from '@angular/core';
import { OrgsService } from './services/orgs.service'
import {Orgs} from './Orgs'

@Component({
  selector: 'app-root',
  template:   `<div>
                  <nav class="navbar navbar-expand-lg navbar-light bg-light">
                  <a class="navbar-brand" href="#">Navbar</a>
                  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                      <li class="nav-item active">
                        <a class="nav-link" href="/home">Home <span class="sr-only">(current)</span></a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="/about">About</a>
                      </li>
                    </ul>
                  </div>
                </nav>
                <router-outlet></router-outlet>
              </div>`,
})
export class AppComponent {
 
}
