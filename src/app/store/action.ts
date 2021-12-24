import { createAction, props } from '@ngrx/store';
import { ToDo, ToDoContent } from './model';

export const increment = createAction('[Counter Component] Increment',props<{properties: ToDoContent}>());
export const decrement = createAction('[Counter Component] Decrement');
export const reset = createAction('[Counter Component] Reset');