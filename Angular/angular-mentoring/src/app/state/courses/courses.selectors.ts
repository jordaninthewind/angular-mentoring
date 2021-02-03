import { createSelector } from "@ngrx/store";
import { CourseItem } from "src/app/course-item/course-item-model";
import { AppState } from "../app.state";

export const selectCourses = createSelector(
    (state: AppState) => state.courses,
    (courses: Array<CourseItem>) => courses
);