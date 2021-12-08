import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-sanjose',
  templateUrl: './sanjose.component.html',
  styleUrls: ['./sanjose.component.css']
})
export class SanjoseComponent implements OnInit {
  weather: any=[]
  constructor(private _httpService: HttpService) { }

  ngOnInit(): void {
    let observable = this._httpService.getSanjose();


    observable.subscribe(
       (data:any) =>{
         console.log("esto es data weather: ",data)
      this.weather = data
      console.log("temp: ",this.weather.main.temp)
      console.log("temp_min: ",this.weather.main.temp_min)
      console.log("temp_max: ",this.weather.main.temp_max)
      console.log("temp_description: ",this.weather.weather[0].description)
      console.log("temp_humidity: ",this.weather.main.humidity)


    },
    (error:any) =>{
      console.log("Something wet wrong ",error);
    })
    // console.log("After loading the tasks: ", this.taskslist);
  }
  
}