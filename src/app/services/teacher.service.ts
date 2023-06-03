import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Teacher } from '../components/teacherlist/teacher';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  constructor(private httpClient: HttpClient) { }
  private apiPath:string ="Teacher"; 
  

  getAllTeachers(): Observable<any>{
    return this.httpClient.get(`${environment.apiUrl}/${this.apiPath}`);
  }

  getTeacherById(teacherId:number): Observable<any>{
    let data;
    data = this.httpClient.get(`${environment.apiUrl}/${this.apiPath}/${teacherId}`)
    return  data
  }

  addNewTeacher(teacher:Teacher){
    console.log(teacher);
    this.httpClient.post(`${environment.apiUrl}/${this.apiPath}`,teacher)
    .subscribe((e)=>{
      return e
    });
  }

}
