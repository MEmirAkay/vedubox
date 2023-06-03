import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddteacherComponent } from './components/addteacher/addteacher.component';
import { AddstudentComponent } from './components/addstudent/addstudent.component';
import { AddcourseComponent } from './components/addcourse/addcourse.component';
import { WelcomepageComponent } from './components/welcomepage/welcomepage.component';
import { LoginComponent } from './components/login/login.component';
import { ViewcourseComponent } from './components/viewcourse/viewcourse.component';
import { ViewstudentComponent } from './components/viewstudent/viewstudent.component';
import { ViewteacherComponent } from './components/viewteacher/viewteacher.component';
import { AdminpanelComponent } from './components/adminpanel/adminpanel.component';
import { TeacherpanelComponent } from './components/teacherpanel/teacherpanel.component';
import { StudentpanelComponent } from './components/studentpanel/studentpanel.component';
import { AccountService } from './services/account.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CourselistComponent } from './components/courselist/courselist.component';
import { CoursesComponent } from './components/courses/courses.component';
import { HttpClientModule } from "@angular/common/http";
import { StudentlistComponent } from './components/studentlist/studentlist.component';
import { TeacherlistComponent } from './components/teacherlist/teacherlist.component';

@NgModule({
  declarations: [
    AppComponent,
    AddteacherComponent,
    AddstudentComponent,
    AddcourseComponent,
    WelcomepageComponent,
    LoginComponent,
    ViewcourseComponent,
    ViewstudentComponent,
    ViewteacherComponent,
    AdminpanelComponent,
    TeacherpanelComponent,
    StudentpanelComponent,
    NavbarComponent,
    CourselistComponent,
    CoursesComponent,
    StudentlistComponent,
    TeacherlistComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [AccountService],
  bootstrap: [AppComponent]
})
export class AppModule { }
