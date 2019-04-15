

 import { Component, OnInit } from '@angular/core';
 import { ToastrService } from 'ngx-toastr';

 // Services
 import { employeeService } from '../../../services/employee/employee.service';
 import { routerTransition } from '../../../services/config/config.service';

 @Component({
 	selector: 'app-employee-list',
 	templateUrl: './employee-list.component.html',
 	styleUrls: ['./employee-list.component.css'],
 	animations: [routerTransition()],
 	host: {'[@routerTransition]': ''}
 })

 export class employeeListComponent implements OnInit {
 	employeeList:any;
 	employeeListData:any;
 	constructor(private employeeService:employeeService,private toastr: ToastrService) { }
 	// Call employee list function on page load 
 	ngOnInit() {
 		this.getemployeeList();
 	}

 	// Get employee list from services
 	getemployeeList(){
 		let employeeList = this.employeeService.getAllemployees();
 		this.success(employeeList)
 	}

 	// Get employee list success
 	success(data){
 		this.employeeListData = data.data;
 		for (var i = 0; i < this.employeeListData.length; i++) {
 			this.employeeListData[i].name = this.employeeListData[i].project_name;
 		}
 	}

 	// Delete a employee with its index
 	deleteemployee(index:number){
 		// get confirm box for confirmation
 		let r = confirm("Are you sure you want to delete?");
 		if (r == true) {
 			let employeeDelete = this.employeeService.deleteemployee(index);
 			if(employeeDelete) {
 				this.toastr.success("Success", "employee Deleted");
 			} 
 			this.getemployeeList();
 		}
 	}
 }

