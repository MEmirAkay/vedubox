import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeacherService } from 'src/app/services/teacher.service';
import { Teacher } from './teacher';

@Component({
  selector: 'app-teacherlist',
  templateUrl: './teacherlist.component.html',
  styleUrls: ['./teacherlist.component.css']
})
export class TeacherlistComponent implements OnInit {

  teachers!: Teacher[];

  constructor(
    private teacherService: TeacherService,
    private router: Router,
  ) { }

  vievTeacher(teacherId: number) {
    this.router.navigate([`/teacher/${teacherId}`]);
  }

  ngOnInit(): void {
    this.teacherService.getAllTeachers().subscribe(data => {
      this.teachers = data
    });



  }
}
