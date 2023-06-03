import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeacherService } from 'src/app/services/teacher.service';
import { Teacher } from '../teacherlist/teacher';

@Component({
  selector: 'app-viewteacher',
  templateUrl: './viewteacher.component.html',
  styleUrls: ['./viewteacher.component.css']
})
export class ViewteacherComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private teacherService: TeacherService

  ) { }

    teacher!: Teacher;

  ngOnInit(): void {
    
    this.activatedRoute.params.subscribe(params => {
      this.teacherService.getTeacherById(params["teacherId"]).subscribe(data => { this.teacher = data});
    })
    
  }

}
