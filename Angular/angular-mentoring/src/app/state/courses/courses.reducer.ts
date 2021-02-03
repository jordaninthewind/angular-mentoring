import { createReducer, on, Action } from "@ngrx/store";
import { CourseItem } from "src/app/course-item/course-item-model";
import { retrievedCoursesList } from "./courses.actions";


export const initialState: ReadonlyArray<CourseItem> = [];

export const coursesReducer = createReducer(
    initialState,
    on(retrievedCoursesList, (state, { CourseItem }) => [...CourseItem])
);