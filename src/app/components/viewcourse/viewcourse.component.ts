import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from 'src/app/services/course.service';
import { Course } from '../courses/course';

@Component({
  selector: 'app-viewcourse',
  templateUrl: './viewcourse.component.html',
  styleUrls: ['./viewcourse.component.css']
})
export class ViewcourseComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private courseService: CourseService
  ) { }

  course: Course | undefined;

  ngOnInit(): void {


    this.activatedRoute.params.subscribe(params => {
      this.courseService.getCourseById(params["courseId"]).subscribe(data => { this.course = data });
    })
  }
  
}
