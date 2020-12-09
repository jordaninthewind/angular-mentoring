import { Content } from '@angular/compiler/src/render3/r3_ast';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseItemComponent } from './course-item.component';

describe('CourseItemComponent', () => {
  let component: CourseItemComponent;
  let fixture: ComponentFixture<CourseItemComponent>;
  let courseItem: HTMLElement;
  let courseItemContent: HTMLElement;
  let title: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CourseItemComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseItemComponent);
    component = fixture.componentInstance;
    courseItem = fixture.nativeElement.getElementsByClassName('course-item')[0];
    courseItemContent = fixture.nativeElement.querySelector('mat-card-content');
    title = fixture.nativeElement.querySelector('mat-card-title');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('has the correct title', () => {
    console.log(title);
  })

  it('has the correct contentp', () => {
    console.log(courseItemContent);
  })
});
