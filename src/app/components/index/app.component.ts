

import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})


export class AppComponent {
	title = 'Human Resource Management System';

	// Add few employees for initial listing
	employeesList = [
	{	
		id : 1,
		project_name : "hrms",
		technologies : "angular5, typescrript",
		duration: "6 months",
		description: "building a hr portal",
		responsibilities : "development testing"
	},
	{
		id : 2,
		project_name : "hrms",
		technologies : "angular5, typescrript",
		duration: "6 months",
		description: "building a hr portal",
		responsibilities : "development testing"
	},
	{
		id : 3,
		project_name : "hrms",
		technologies : "angular5, typescrript",
		duration: "6 months",
		description: "building a hr portal",
		responsibilities : "development testing"
	},
	{
		id : 4,
		project_name : "hrms",
		technologies : "angular5, typescrript",
		duration: "6 months",
		description: "building a hr portal",
		responsibilities : "development testing"
	},
	{
		id : 5,
		project_name : "hrms",
		technologies : "angular5, typescrript",
		duration: "6 months",
		description: "building a hr portal",
		responsibilities : "development testing"
	}
	];

	constructor() {
		// Save employees to localStorage
		localStorage.setItem('employees', JSON.stringify(this.employeesList));
	}
}


