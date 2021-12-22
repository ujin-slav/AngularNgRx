import ActionWithPayload from "./ActionWithPayLoad";
import ToDo from "./model";
import { ToDoState, initializeState } from "./state";
import * as ToDoActions from "./action";
import { Action } from "@ngrx/store";

const initialState = initializeState();

export function reducer(state: ToDoState = initialState,
    action: Action) {

    switch (action.type) {
        case ToDoActions.GET_TODO:            
            return { ...state, Loaded: false, Loading: true };

        case ToDoActions.CREATE_TODO:
            return ({
                ...state,
                ToDoList: state.ToDoList.concat((action as ActionWithPayload<ToDo[]>).payload),
                Loaded: false, Loading: true
            });

        default:
            return state;
    }
}