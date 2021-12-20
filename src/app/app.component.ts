import { Component } from '@angular/core';
import { OrgsService } from './services/orgs.service'
import {Orgs} from './Orgs'

@Component({
  selector: 'app-root',
  template:   `
 <div class="card" *ngFor="let item of items">
 <div class="card-header">
    {{item.nameOrg}}
  </div>
  <div class="card-body">
        <div><span style={boldStyle}>ИНН:</span> {{item.inn}} 
        <span style={boldStyle}> КПП: </span>{{item.kpp}}</div>
        <div><span style={boldStyle}> Адрес: </span>{{item.address}}</div>
        <div><span style={boldStyle}> ФИО рук-ля: </span>{{item.surname}} {{item.name}} {{item.patron}}</div>
        <div><span style={boldStyle}> Категория: </span>{{item.category}}</div>
        <div><span style={boldStyle}> ОКПО: </span>{{item.okpo}}</div>
        <div><span style={boldStyle}> Сайт: </span>{{item.site}}</div> 
  </div>
</div>`,
})
export class AppComponent {
 
}
