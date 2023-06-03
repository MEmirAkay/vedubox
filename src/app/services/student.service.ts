import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Student } from '../components/studentlist/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private httpClient: HttpClient) { }
  private apiPath:string ="Student"; 
  

  getAllStudents(): Observable<any>{

    return this.httpClient.get(`${environment.apiUrl}/${this.apiPath}`) 
  }

  getStudentById(studentId:number): Observable<any>{
    let data;
    data = this.httpClient.get(`${environment.apiUrl}/${this.apiPath}/${studentId}`)
    return  data
  }

  addNewStudent(student:Student){
    this.httpClient.post(`${environment.apiUrl}/${this.apiPath}`,student)
    .subscribe((e)=>{
      return e
    })
  }

}
