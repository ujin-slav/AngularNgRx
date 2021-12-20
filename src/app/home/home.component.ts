import { Component, OnInit } from '@angular/core';
import { OrgsService } from '../services/orgs.service'
import {Orgs} from '../Orgs'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
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
