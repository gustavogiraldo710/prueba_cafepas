import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'prueba_cafepas';

  constructor(private route:Router){}

  SobreNosotros(){
    this.route.navigate(['sobrenosotros']);
  }

  Contacto(){
    this.route.navigate(['contacto']);
  }

  Alimentos(){
    this.route.navigate(['alimentos']);
  }

  Aseo(){
    this.route.navigate(['aseo']);
  }

  Header(){
    this.route.navigate(['header']);
  }
}
