import { Component, ElementRef, EventEmitter, Inject, OnInit, Output, ViewChild } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CourseItem } from '../course-item/course-item-model';
import { MatChipInputEvent } from '@angular/material/chips';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { MatAutocomplete } from '@angular/material/autocomplete';

@Component({
  selector: 'app-new-course',
  templateUrl: './new-course.component.html',
  styleUrls: ['./new-course.component.scss']
})
export class NewCourseComponent implements OnInit {
  public allAuthors: string[] = [
    "William P. Rutherford", "Jenkins W. Jenkins", "Susan P. Worthington"
  ];

  public courseAuthors: Array<string> = [];

  filteredAuthors: Observable<string[]>;

  @ViewChild('authorInput') authorInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;

  form: FormGroup;

  separatorKeyCodes: number[] = [ENTER, COMMA];

  @Output() newCourseSubmitted: EventEmitter<CourseItem> = new EventEmitter<CourseItem>();

  constructor(public dialogRef: MatDialogRef<NewCourseComponent>, @Inject(MAT_DIALOG_DATA) public data: CourseItem) { }

  ngOnInit(): void {
    // if (this.data !== null) this.newCourse = this.data;

    // This logic is only for new courses, but could be extended by adding the data pulled above into intialization.
    this.form = new FormGroup({
      title: new FormControl("", [
        Validators.required,
        Validators.maxLength(50),
      ]),
      content: new FormControl("", [
        Validators.required,
        Validators.maxLength(500),
      ]),
      creationDate: new FormControl("", Validators.required),
      duration: new FormControl(0, Validators.required),
      authors: new FormControl(
        this.courseAuthors, [
          Validators.required, 
          Validators.minLength(1)
        ]),
    });

    this.filteredAuthors = this.authors.valueChanges.pipe(
      map((author: string | null) => author ? this._filter(author) : this.allAuthors.slice())
    );
  }

  public get filmDuration(): number {
    return parseInt(this.duration.value);
  }

  public addCourse() {
    this.newCourseSubmitted.emit(this.form.value);
    this.dialogRef.close();
  }

  public closeDialog() {
    this.dialogRef.close();
  }

  public removeAuthor(author: string): void {
    const index = this.courseAuthors.indexOf(author);

    this.courseAuthors.splice(index, 1);
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;
    
    this.courseAuthors.push(value.trim());

    input.value = '';

    // this.fruitCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allAuthors.filter(author => author.toLowerCase().indexOf(filterValue) === 0);
  }

  get title() { return this.form.get('title'); }

  get content() { return this.form.get('content'); }

  get creationDate() { return this.form.get('creationDate'); }

  get duration() { return this.form.get('duration'); }

  get authors() { return this.form.get('authors'); }

}