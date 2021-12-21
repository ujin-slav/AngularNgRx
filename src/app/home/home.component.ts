import { Component, OnInit } from '@angular/core';
import { OrgsService } from '../services/orgs.service'
import {Orgs} from '../Orgs'

@Component({
  selector: 'app-home',
  template:  `
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
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  items:Orgs[] = []
  page:number = 1

  constructor(private orgsService: OrgsService){}

  scrollHandler = (e:any):void=>{
    if((e.target.documentElement.scrollHeight - 
      (e.target.documentElement.scrollTop + window.innerHeight) < 100)) {
        this.fetchData()
      }
  }

  fetchData = ():void=>{
    this.orgsService.getData(this.page).subscribe((result:any) => {
      this.items.push(...result.content)
    })
    this.page++
  }

  ngOnInit(){
    document.addEventListener('scroll',this.scrollHandler);
    this.fetchData()
  }
  ngOnDestroy() {
    window.removeEventListener('scroll', this.scrollHandler);
  }

}
