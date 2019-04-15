import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent {

  id:number;
  name:string;

  employee = [
    {
      id: 5,
      name:'Accounts'
    },
    {
      id: 6,
      name:'Information Tecnology'
    },
    {
      id: 7,
      name:'Network'
    },
    {
      id: 8,
      name:'Testing'
    },
    {
      id: 9,
      name:'Development'
    },
    {
      id: 9,
      name:'Human Resource'
    },
    {
      id: 9,
      name:'Management'
    }
  ];

  deleteEmployee(index){
    this.employee.splice(index, 1);
  }

}
