import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CourseService } from 'src/app/services/course.service';
import { TeacherService } from 'src/app/services/teacher.service';
import { Course } from '../courses/course';
import { Teacher } from '../teacherlist/teacher';


@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.css']
})
export class AddcourseComponent implements OnInit {

  course: Course = new Course();
  teacherId: number = 0;

  teachers: Teacher[] | undefined;

  constructor(
    private teacherService: TeacherService,
    private courseService: CourseService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.teacherService.getAllTeachers().subscribe(data => {
      this.teachers = data

    });

  }

  setTeacher(event: any) {
    var str = event.target.value;
    
    var n = 0;
    for (let index = 0; index < str.length; index++) {
      const element = str[index];
      if(str[index] == " "){
        n = index+1;
      }
    }
    var newStr = str.slice(n,str.length);
    this.course.teacherId=newStr;
    
    
  }

  addCourse(form: NgForm): void {
    this.teacherService.getTeacherById(this.course.teacherId).subscribe(data=>{
      this.course.teacherName = data.fullName;

      console.log(this.course)
    this.courseService.addNewCourse(this.course)
    })
    
    
    this.router.navigate([`adminpanel`])
    return alert("Course added successfully!")
  }

}
