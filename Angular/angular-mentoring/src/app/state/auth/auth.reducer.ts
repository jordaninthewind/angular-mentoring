import { createReducer, on, Action } from "@ngrx/store";
import { setUserAuth } from "./auth.actions";

export const initialState = {};

export const authReducer = createReducer(
    initialState,
    on(setUserAuth, (state) => {
        console.log(state)
        return state;
    })
);