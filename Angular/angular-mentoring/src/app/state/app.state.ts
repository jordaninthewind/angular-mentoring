import { CourseItem } from "../course-item/course-item-model";

export interface AppState {
    courses: ReadonlyArray<CourseItem>;
}