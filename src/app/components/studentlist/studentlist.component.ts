import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';
import { Student } from './student';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css']
})
export class StudentlistComponent implements OnInit {

  students: Student[] | undefined;

  constructor(
    private studentService: StudentService,
    private router: Router,
  ) { }

  viewStudent(studentId: number) {
    this.router.navigate([`/student/${studentId}`]);
  }

  ngOnInit(): void {
    this.studentService.getAllStudents().subscribe(data => {
      this.students = data
    });
  }

}
