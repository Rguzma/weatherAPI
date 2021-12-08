import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  weather:any[]=[]
  constructor(private _http: HttpClient) { 
    this.getWashington();
  }

getWashington(){
  console.log("hola")
  return this._http.get('https://api.openweathermap.org/data/2.5/weather?q=washington&appid=91f8bea21fcc2d5d6e1d3a64733c457a')
  
};
getSeattle(){
  console.log("hola")
  return this._http.get('https://api.openweathermap.org/data/2.5/weather?q=seattle&appid=91f8bea21fcc2d5d6e1d3a64733c457a')
  
};
getSanjose(){
  console.log("hola")
  return this._http.get('https://api.openweathermap.org/data/2.5/weather?id=5392171&appid=91f8bea21fcc2d5d6e1d3a64733c457a')
  
};
getBurbank(){
  console.log("hola")
  return this._http.get('https://api.openweathermap.org/data/2.5/weather?q=burbank&appid=91f8bea21fcc2d5d6e1d3a64733c457a')
  
};
getDallas(){
  console.log("hola")
  return this._http.get('https://api.openweathermap.org/data/2.5/weather?q=dallas&appid=91f8bea21fcc2d5d6e1d3a64733c457a')
  
};
getChicago(){
  console.log("hola")
  return this._http.get('https://api.openweathermap.org/data/2.5/weather?q=chicago&appid=91f8bea21fcc2d5d6e1d3a64733c457a')
  
};

}