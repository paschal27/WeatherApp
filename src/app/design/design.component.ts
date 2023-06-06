import { Component, OnInit } from '@angular/core';
import { DesignServiceService } from '../design-service.service';

@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.css']
})
export class DesignComponent implements OnInit {

  public myWeather: any
  public temperature: number = 0
  public feelslike: number = 0
  public humidity: number = 0
  public pressure: number = 0
  public summary: string = ''
  public city: string = 'Auburn'
  public country: string = 'US'
  public units: string = 'imperial'
  public input: string = ''
  public iconURL: string = ''

  constructor(private weatherService: DesignServiceService) { }

  ngOnInit(): void {
    this.getweather()
    
  }

  getweather(clicked?: string) {
    debugger
    if(clicked){
      if(this.input === ''){
        alert("Enter a City")
      }else{
        this.city = this.input
      }
    }
    
    this.weatherService.getWeather(this.city, this.country, this.units).subscribe({
      next: (res) => {
        console.log(res)
        this.myWeather = res;
        console.log(this.myWeather)
        this.temperature = this.myWeather.main.temp
        this.feelslike = this.myWeather.main.feels_like
        this.humidity = this.myWeather.main.humidity
        this.pressure = this.myWeather.main.pressure
        this.summary = this.myWeather.weather[0].main
        
        this.iconURL = 'https://openweathermap.org/img/wn/' + this.myWeather.weather[0].icon + '@2x.png'
      },
      error: (error) => console.log(error.message),
      complete: () => console.info('API call completed')
    })
  }

  onSelected(event: any) {
    this.country = event.target.value
    this.getweather()
  }

  changeUnits() {
    if (this.units == 'imperial'){
      this.units = 'metric' 
    }else {
      this.units = 'imperial'
  }

  this.getweather();

  }

}
