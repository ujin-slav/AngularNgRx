import { Action, createReducer, on } from '@ngrx/store';
import { Orgs } from '../Orgs';
import { addOrg } from '../store/action';
 
export const initialState:number[] = [];
 
const counterReducer = createReducer(
  initialState,
  on(addOrg, (state,{orgs}) => [...state,...orgs])
);
 
export function reducer(state: [], action: Action) {
  return counterReducer(state, action);
}