import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title:string = 'Angular Crud';
  
  msg:string = '';
  msg1:string = '';
  msg2:string = '';

  employees = [
    {'name': 'Fazt', position: 'manager', email:'email@email.com'},
    {'name': 'Juan', position: 'Designer', email:'email@email.com'},
    {'name': 'Pedro', position: 'Programmer', email:'email@email.com'}
  ];

  model:any = {};
  model2:any = {};
  hideUpdate:boolean = true;

  addEmployee():void{
    this.employees.push(this.model);
    this.msg = 'Usuario agregado';
  }

  deleteEmployee(i):void {
    var answer = confirm('¿Estas seguro de eliminar este usuario?');
    if(answer) {
      this.employees.splice(i, 1);
      this.msg2 = 'Usuario eliminado';
    }
  }

  myValue;
  editEmployee(i):void {
    this.hideUpdate = false;
    this.model2.name = this.employees[i].name;
    this.model2.position = this.employees[i].position;
    this.model2.email = this.employees[i].email;
    this.myValue = i;
  }

  updateEmployee():void {
    let i = this.myValue;
    for(let j = 0; j < this.employees.length; j++){
      if(i == j) {
        this.employees[i] = this.model2;
        this.msg1 = 'Usuario actualizado';
        this.model2 = {};
      }
    }
  }

  closeAlert():void {
    this.msg = '';
    this.msg1 = '';
    this.msg2 = '';
  }

}
