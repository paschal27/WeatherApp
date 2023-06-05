import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DesignServiceService {

  constructor(private http: HttpClient) { 

  }

  getWeather(city: string, country: string, units: string){
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=8b464ddcb248acb5e7c0ba46de925c6c&units=${units}`)
  }
}
