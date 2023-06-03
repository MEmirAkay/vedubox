import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TeacherService } from 'src/app/services/teacher.service';
import { Teacher } from '../teacherlist/teacher';

@Component({
  selector: 'app-addteacher',
  templateUrl: './addteacher.component.html',
  styleUrls: ['./addteacher.component.css']
})
export class AddteacherComponent implements OnInit {

  teacher: Teacher = new Teacher();

  constructor(
    private teacherService : TeacherService,
    private router : Router
    ) { }

  addTeacher(form: NgForm){
    this.teacherService.addNewTeacher(this.teacher);
    this.router.navigate([`adminpanel`]);
  return alert("New teacher added successfully!")
  }


  ngOnInit(): void {

  }



}
