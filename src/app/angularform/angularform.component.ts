import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angularform',
  templateUrl: './angularform.component.html',
  styleUrls: ['./angularform.component.css']
})
export class AngularformComponent implements OnInit {
  myForm: any;
  json: any  

  constructor() { }

  ngOnInit() {
    this.json = {
        inputtext:"Hi",
        email:"hi@gmail.com",
        checkbox:true,
        sex:false
      };
  }

  saveData(myForm){
    console.log(myForm.value);
  }
}
