import { Component } from '@angular/core';
import { OrgsService } from './services/orgs.service'
import {Orgs} from './Orgs'

@Component({
  selector: 'app-root',
  template:   `<ul>
                <li *ngFor="let item of items">{{item.nameOrg}}</li>
              </ul>`,
})
export class AppComponent {
 
  items:Orgs[] = []

  constructor(private orgsService: OrgsService){}

  ngOnInit(){
    this.orgsService.getData().subscribe((result:any) => {
      const orgs:Orgs[] = result.content
      this.items = orgs
      console.log(this.items)
    });
  }
  
}
