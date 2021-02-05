import { CourseItem } from "../course-item/course-item-model";
import { UserModel } from "../user-model";

export interface AppState {
    courses: ReadonlyArray<CourseItem>;
    user: UserModel;
}