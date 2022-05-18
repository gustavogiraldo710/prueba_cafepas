import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alimentos',
  templateUrl: './alimentos.component.html',
  styleUrls: ['./alimentos.component.css']
})
export class AlimentosComponent {

  constructor(private route:Router) { }

  Arroz(){
    this.route.navigate(['arroz']);
  }

  

}
