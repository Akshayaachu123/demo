import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { enableProdMode } from '@angular/core';

//Modules
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr'; 

// Services
import { AuthService } from './services/auth/auth.service';
import { UserService } from './services/user/user.service';
import { employeeService } from './services/employee/employee.service';

// Pipes
import { FilterPipe } from './pipes/filter.pipe';
import { PhonePipe } from './pipes/phone.pipe';

// Components
import { AppComponent } from './components/index/app.component';
import { employeeListComponent } from './components/employee/list/employee-list.component';
import { employeeDetailsComponent } from './components/employee/details/employee-details.component';
import { employeeAddComponent } from './components/employee/add/employee-add.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent} from './components/home/home.component';
import { HighlightemployeeDirective } from './directives/highlight-employee.directive';
import { ProjectmanagerComponent } from './components/employee/projectmanager/projectmanager.component';
import { ProjectlistComponent } from './components/employee/projectlist/projectlist.component';
import { EmployeelistComponent } from './components/employee/employeelist/employeelist.component';
import { ProjectteamComponent } from './components/employee/projectteam/projectteam.component';
import { DepartmentComponent } from './components/employee/department/department.component';
import { DesignationComponent } from './components/employee/designation/designation.component';
import { AssignteamComponent } from './components/employee/assignteam/assignteam.component';



// Parent Routes
const routes : Routes = [
	{
		path: '',
		component: HomeComponent,
		//children :homeChildRoutes,
		canActivate : [AuthService]
	},
{
	path: 'login',
	component: LoginComponent
},
{
	path: 'projectmanager',
	component: ProjectmanagerComponent
},
{
	path: 'projectlist',
	component: ProjectlistComponent
},
{
	path: 'employeelist',
	component: EmployeelistComponent
},
{
	path: 'projectteam',
	component: ProjectteamComponent
},
{
	path: 'department',
	component: DepartmentComponent
},
{
	path: 'designation',
	component: DesignationComponent
},
{
	path: 'assignteam',
	component: AssignteamComponent
},
{
	path: '**',
	redirectTo: ''
},
];

@NgModule({
	declarations: [
	AppComponent,
	employeeListComponent,
	employeeDetailsComponent,
	employeeAddComponent,
	LoginComponent,
	HomeComponent,
	FilterPipe,
	PhonePipe,
	HighlightemployeeDirective,
	ProjectmanagerComponent,
	ProjectlistComponent,
	EmployeelistComponent,
	ProjectteamComponent,
	DepartmentComponent,
	DesignationComponent,
	AssignteamComponent
	],
	imports: [
	BrowserModule,
	RouterModule,
	RouterModule.forRoot(routes),
	FormsModule,
	ReactiveFormsModule,
	BrowserAnimationsModule,
	ToastrModule.forRoot({ 
		timeOut: 3000,
		positionClass: 'toast-bottom-right',
		preventDuplicates: true,
	}),
	],
	providers: [AuthService,UserService,employeeService],
	bootstrap: [AppComponent]
})

// enableProdMode();

export class AppModule { }
