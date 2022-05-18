import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-arroz',
  templateUrl: './arroz.component.html',
  styleUrls: ['./arroz.component.css']
})
export class ArrozComponent implements OnInit {

  constructor(private route:Router) { }
  
  Arroz(){
    this.route.navigate(['arroz']);
  }

  ngOnInit(): void {
  }

}
