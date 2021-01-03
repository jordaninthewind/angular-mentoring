import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CourseItemComponent } from './course-item/course-item.component';
import { CourseListComponent } from './course-list/course-list.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { BorderColorDirective } from './directives/border-color.directive';
import { DurationPipe } from './pipes/duration.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { OrderByPipe } from './pipes/order-by.pipe';
import { LoginPageComponent } from './login-page/login-page.component';
import { FormsModule } from '@angular/forms';
import { NewCourseComponent } from './new-course/new-course.component';
import { MatDialogModule } from '@angular/material/dialog';

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
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FontAwesomeModule,
    FormsModule,
    MatCardModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule
  ],
  providers: [{ provide: Window, useValue: window }],
  bootstrap: [AppComponent]
})
export class AppModule { }
