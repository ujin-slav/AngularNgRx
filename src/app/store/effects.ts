import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { map, mapTo,switchMap } from 'rxjs/operators';
import { increment, decrement, reset } from '../store/action';
import { OrgsService } from '../services/orgs.service'


@Injectable()


export class Effects {
  constructor(private actions$: Actions,private orgsService: OrgsService) {
  }

  load$ = createEffect(() =>
      this.actions$.pipe(
        ofType(decrement),
        switchMap(() => this.orgsService.getData(10).pipe(
          map(data => increment({properties:data}))),
          //catchError(() => [loadError()])
      )
    ));
  
}