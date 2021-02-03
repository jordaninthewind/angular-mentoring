import { createAction, props } from '@ngrx/store';

export const retrievedCoursesList = createAction(
    '[Courses List/API] Retrieve Courses Success',
    props<{ CourseItem }>()
);