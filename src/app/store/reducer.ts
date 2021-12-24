import { Action, createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from '../store/action';
import { State, ToDo } from './model';
  
  export const initialState: State = {
    properties: {content:[]},
  };
 
const _counterReducer = createReducer(
  initialState,
  on(increment,  (state, { properties }) => ({ ...state, properties })),
);
 
export function counterReducer(state: State | undefined, action: Action) {
  return _counterReducer(state, action);
}