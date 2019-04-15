

 import { Injectable } from '@angular/core';

 @Injectable()
 export class employeeService {

   constructor() { }

   // Get all employees list via API or any data storage
   getAllemployees(){
     let employeeList:any;
     if(localStorage.getItem('employees') && localStorage.getItem('employees') != '') {
       employeeList = {
         code : 200,
         message : "employees List Fetched Successfully",
         data : JSON.parse(localStorage.getItem('employees'))
       }
     }else{
       employeeList = {
         code : 200,
         message : "employees List Fetched Successfully",
         data : JSON.parse(localStorage.getItem('employees'))
       }
     }
     return employeeList;
   }

   doRegisteremployee(data, index){
     let employeeList = JSON.parse(localStorage.getItem('employees'));
     let returnData;
     console.log("index", index);
     if(index != null) {


       for (var i = 0; i < employeeList.length; i++) {
         if (index != i && employeeList[i].email == data.email) {
           returnData = {
             code : 503,
             message : "Email Address Already In Use",
             data : null
           }    
           return returnData;
         }
       }

       employeeList[index] = data;
       localStorage.setItem('employees',JSON.stringify(employeeList));
       returnData = {
         code : 200,
         message : "employee Successfully Updated",
         data : JSON.parse(localStorage.getItem('employees'))
       }    
     }else{      
       data.id = this.generateRandomID();
       for (var i = 0; i < employeeList.length; i++) {
         if (employeeList[i].email == data.email) {
           returnData = {
             code : 503,
             message : "Email Address Already In Use",
             data : null
           }    
           return returnData;
         }
       }
       employeeList.unshift(data);

       localStorage.setItem('employees',JSON.stringify(employeeList));

       returnData = {
         code : 200,
         message : "employee Successfully Added",
         data : JSON.parse(localStorage.getItem('employees'))
       }    
     }
     return returnData;
   }

   deleteemployee(index:number){
     let employeeList = JSON.parse(localStorage.getItem('employees'));

     employeeList.splice(index, 1);

     localStorage.setItem('employees',JSON.stringify(employeeList));

     let returnData = {
       code : 200,
       message : "employee Successfully Deleted",
       data : JSON.parse(localStorage.getItem('employees'))
     }

     return returnData;
   }



   getemployeeDetails(index:number){
     let employeeList = JSON.parse(localStorage.getItem('employees'));

     let returnData = {
       code : 200,
       message : "employee Details Fetched",
       employeeData : employeeList[index]
     }

     return returnData;
   }


   generateRandomID() {
     var x = Math.floor((Math.random() * Math.random() * 9999));
     return x;
   }

 }

