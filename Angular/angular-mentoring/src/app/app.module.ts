import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BorderColorDirective } from './directives/border-color.directive';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CourseItemComponent } from './course-item/course-item.component';
import { CourseListComponent } from './course-list/course-list.component';
import { DurationPipe } from './pipes/duration.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { NewCourseComponent } from './new-course/new-course.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { OrderByPipe } from './pipes/order-by.pipe';
import { TokenInterceptor } from './auth/token.interceptor';
import { LoadingOverlayComponent } from './loading-overlay/loading-overlay.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { coursesReducer } from './state/courses/courses.reducer';
import { authReducer } from './state/auth/auth.reducer';
import { CustomNumberValidatorDirective } from './directives/custom-number-validator.directive';


@NgModule({
  declarations: [
    AppComponent,
    BorderColorDirective,
    BreadcrumbsComponent,
    CourseItemComponent,
    CourseListComponent,
    DurationPipe,
    FilterPipe,
    FooterComponent,
    HeaderComponent,
    OrderByPipe,
    LoginPageComponent,
    NewCourseComponent,
    NotFoundComponent,
    LoadingOverlayComponent,
    CustomNumberValidatorDirective,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ courses: coursesReducer, user: authReducer }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [
    {
      provide: Window,
      useValue: window,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
