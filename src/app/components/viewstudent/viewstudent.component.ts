import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';
import { Student } from '../studentlist/student';

@Component({
  selector: 'app-viewstudent',
  templateUrl: './viewstudent.component.html',
  styleUrls: ['./viewstudent.component.css']
})
export class ViewstudentComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private studentService: StudentService
  ) { }

  student !: Student;

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params => {
      this.studentService.getStudentById(params["studentId"]).subscribe(data => {
        this.student = data;
      })

    })

  }

}
