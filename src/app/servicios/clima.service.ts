import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClimaService {
  api="14ce641855b35c1b77d7b631ead22322"
  
  constructor(private Http:HttpClient) { 
    
  }
  //METODO PARA OBTENER EL CLIMA
 getClima(ciudad:string):Observable<any>{
    return  this.Http.get(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=14ce641855b35c1b77d7b631ead22322`)
  }
}

