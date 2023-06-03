import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddstudentComponent } from './components/addstudent/addstudent.component';
import { AddteacherComponent } from './components/addteacher/addteacher.component';
import { AdminpanelComponent } from './components/adminpanel/adminpanel.component';
import { CoursesComponent } from './components/courses/courses.component';
import { LoginComponent } from './components/login/login.component';
import { StudentpanelComponent } from './components/studentpanel/studentpanel.component';
import { TeacherpanelComponent } from './components/teacherpanel/teacherpanel.component';
import { ViewcourseComponent } from './components/viewcourse/viewcourse.component';
import { ViewstudentComponent } from './components/viewstudent/viewstudent.component';
import { ViewteacherComponent } from './components/viewteacher/viewteacher.component';
import { WelcomepageComponent } from './components/welcomepage/welcomepage.component';
import { AddcourseComponent } from './components/addcourse/addcourse.component';

const routes: Routes = [
  { path: "", component: WelcomepageComponent },
  { path: "login", component: LoginComponent },
  { path: "studentpanel", component: StudentpanelComponent },
  { path: "teacherpanel", component: TeacherpanelComponent },
  { path: "adminpanel", component: AdminpanelComponent },
  { path: "course/:courseId", component: ViewcourseComponent },
  { path: "adminpanel/addteacher", component: AddteacherComponent },
  { path: "adminpanel/addstudent", component: AddstudentComponent },
  { path: "adminpanel/addcourse", component: AddcourseComponent },
  { path: "teacherpanel/addcourse", component: AddcourseComponent },
  { path: "student/:studentId", component: ViewstudentComponent },
  { path: "teacher/:teacherId", component: ViewteacherComponent },
  { path: "courses", component: CoursesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
