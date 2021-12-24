import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable, Subscription } from 'rxjs';
import { increment, decrement, reset } from '../store/action';
import { State, ToDo } from '../store/model';

 
@Component({
  selector: 'app-my-counter',
  template: `
<button (click)="increment()">Загрузить</button>
<div class="card" *ngFor="let item of ToDoList">
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
</div>`
,
})
export class AboutComponent {
  ToDoState$: Observable<State>;
  ToDoSubscription: Subscription | undefined;
  ToDoList: ToDo[] = [];

  constructor(private store: Store<{ count: State}>) { 
    this.ToDoState$ = this.store.select('count');
  }
  ngOnInit() {
    this.ToDoSubscription = this.ToDoState$.pipe(map(x => this.ToDoList = x.properties.content)).subscribe();
  }
 
  increment() {
    let randomToDo: ToDo = {
      nameOrg : "string",
      inn: "string",
      kpp: "string",
      address: "string",
      surname: "string",
      name: "string",
      patron: "string",
      category: "string",
      okpo: "string",
      site: "string",
  }

    //this.store.dispatch(increment({properties:[randomToDo]}));
    this.store.dispatch(decrement());
    console.log(this.ToDoList)
  }
 
  decrement() {
    this.store.dispatch(decrement());
  }
 
  reset() {
    this.store.dispatch(reset());
  }
}