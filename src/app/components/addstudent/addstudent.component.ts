import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';
import { Student } from '../studentlist/student';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {

  student: Student = new Student();

  constructor(
    private studentService: StudentService,
    private router : Router
    ) { }

    addStudent(form: NgForm){
      this.studentService.addNewStudent(this.student);
      this.router.navigate([`adminpanel`])
      return alert("New student added successfully!")
    }

  ngOnInit(): void {
  }

}
