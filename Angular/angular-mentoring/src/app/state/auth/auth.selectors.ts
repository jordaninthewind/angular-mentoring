import { createSelector } from "@ngrx/store";
import { UserModel } from "src/app/user-model";
import { AppState } from "../app.state";

export const selectUserAuth = createSelector(
    (state: AppState) => state.user,
    (user: UserModel) => user
);