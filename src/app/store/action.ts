import { createAction, props } from '@ngrx/store';
import { Orgs } from '../Orgs';

export const addOrg = createAction(
    '[Add Organization] Add',
    props<{ orgs: number[] }>());