import { createAction, props } from '@ngrx/store';

export const setUserAuth = createAction(
    '[Auth/API] Set User Auth',
    props<{ user }>()
);

export const removeUserAuth = createAction(
    '[Auth/API] Remove User Auth',
    props<{ undefined }>()
);