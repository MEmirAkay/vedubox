import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseService } from 'src/app/services/course.service';
import { Course } from '../courses/course';



@Component({
  selector: 'app-courselist',
  templateUrl: './courselist.component.html',
  styleUrls: ['./courselist.component.css']
})
export class CourselistComponent implements OnInit {
  @Input() public UserId:number = 0;
  @Input() public StudentId:number =0;
  courses: Course[] | undefined;

  constructor(
    private courseService: CourseService,
    private router: Router,
    ) { }
  
    viewCourse(courseId: number){
      this.router.navigate([`/course/${courseId}`]);
    }

  ngOnInit(): void {
    // if(this.StudentId == 0){
    //   return
    // }else{
    //   this.
    // }



    if(this.UserId == 0){
      this.courseService.getAllCourse().subscribe(data=>{
        this.courses = data
      });
    }else{
      this.courseService.sortCourseByTeacherId(this.UserId).subscribe(data=>{
        this.courses = data;
      })

    }

  }

}
