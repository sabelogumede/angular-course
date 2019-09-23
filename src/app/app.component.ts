import { Component } from '@angular/core';

// importing our data
import {COURSES} from '../db-data';
import { Course } from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  courses = COURSES;

  // title = COURSES[0].description;
  // price = 9.922330985;
  // startDate = new Date(2000, 0, 1);
  // rate = 0.67;

  onCourseSelected(course: Course) {
    console.log('App component - click event bubbled...', course);
  }

}
