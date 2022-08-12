import { Component, OnInit } from '@angular/core';
import { ClimaService } from 'src/app/servicios/clima.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
   
  UrlImange:string="https://www.culturarecreacionydeporte.gov.co/sites/default/files/clima_gde.jpg"
  ciudad:any

  ///variables para el resultado
  query=false;
  temperatura=0;
  humedad=0
  loading=false
  clima=""
  constructor(private climaService:ClimaService) { }

  ngOnInit(): void {
  }
  agregar(){
    this.loading=true
    //agregar el ng model de clima
   this.climaService.getClima(this.ciudad).subscribe(data=>{
    console.log(data)
    this.loading=false
    this.temperatura=data.main.temp-273
    this.humedad=data.main.humidity
    this.clima=data.weather[0].main
    this.query=true
   })
    
  }

}
