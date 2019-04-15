
 import { Component, OnInit } from '@angular/core';
 import {Validators, FormBuilder, FormGroup} from '@angular/forms';
 import { RouterModule, Routes ,Router,ActivatedRoute} from '@angular/router';
 import { ToastrService } from 'ngx-toastr';

 // Services
 import { employeeService } from '../../../services/employee/employee.service';
 import { routerTransition } from '../../../services/config/config.service';

 @Component({
 	selector: 'app-employee-details',
 	templateUrl: './employee-details.component.html',
 	styleUrls: ['./employee-details.component.css'],
 	animations: [routerTransition()],
 	host: {'[@routerTransition]': ''}
 })

 export class employeeDetailsComponent implements OnInit {
 	index:any;
 	employeeDetail:any;
 	constructor(private router: Router, private route: ActivatedRoute, private employeeService:employeeService,private toastr: ToastrService) { 
 		// Get user detail index number sent in params
 		this.route.params.subscribe(params => {
 			this.index = params['id'];
 			if (this.index && this.index != null && this.index != undefined) {
 				this.getemployeeDetails(this.index);
 			}
 		});
 	}

 	ngOnInit() {
 	}

 	// Get employee details 
 	getemployeeDetails(index:number){
 		let getemployeeDetail = this.employeeService.getemployeeDetails(index);
 		if(getemployeeDetail) {
 			this.employeeDetail = getemployeeDetail.employeeData;
 			this.toastr.success(getemployeeDetail.message,"Success");
 		}
 	}

 }

