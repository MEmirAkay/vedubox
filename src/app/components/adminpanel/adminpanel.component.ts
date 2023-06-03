import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/services/course.service';
import { StudentService } from 'src/app/services/student.service';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-adminpanel',
  templateUrl: './adminpanel.component.html',
  styleUrls: ['./adminpanel.component.css']
})
export class AdminpanelComponent implements OnInit {

  courseCount: number = 0;
  studentCount: number = 0;
  teacherCount: number = 0;

  constructor(
    private courseService: CourseService,
    private studentService: StudentService,
    private teacherService: TeacherService
    ) {

  }

  ngOnInit(): void {
    this.courseService.getAllCourse().subscribe(data => {
      this.courseCount = data.length;
    });

    this.studentService.getAllStudents().subscribe(data => {
      this.studentCount = data.length;
    })

    this.teacherService.getAllTeachers().subscribe(data => {
      this.teacherCount = data.length;
    })

  }

}
