import { Component, OnInit } from '@angular/core';
import { GetApiService } from 'src/app/get-api.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  employee: string[]=[];

  constructor(private api: GetApiService) { }

  ngOnInit(): void {
    this.api.apiCall().subscribe((data)=>{
      console.warn("get api call", data);
      let employeeData=data['data'];
      for(var i=0; i<employeeData.length;i++){
        this.employee[i]=employeeData[i];
        console.log(this.employee);
        
      }
      
    })
  }

}
