import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Course } from '../components/courses/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private httpClient: HttpClient) { }
  private apiPath: string = "Course";


  getAllCourse(): Observable<any> {
    return this.httpClient.get(`${environment.apiUrl}/${this.apiPath}`);
  }

  getCourseById(courseId: number): Observable<any> {
    var data;
    data = this.httpClient.get(`${environment.apiUrl}/${this.apiPath}/${courseId}`)
    return data
  }

  addNewCourse(course: Course) {
    this.httpClient.post(`${environment.apiUrl}/${this.apiPath}`, course)
      .subscribe((e) => {
        return e
      })
  }

  sortCourseByTeacherId(teacherId: number): Observable<any> {
    return this.httpClient.get(`${environment.apiUrl}/${this.apiPath}/sortByTeacher/${teacherId}`)
  }

  // sortCourseByStudentId(studentId: number): Observable<any> {
  //   this.httpClient.get(`${environment.apiUrl}/sortByStudent/${studentId}`).subscribe((e) => { 
  //   })
  //}

  // Releationslar düzeltilmeli youtube de videosu var beğendim ona göre yeniden ayarla4
  

}
