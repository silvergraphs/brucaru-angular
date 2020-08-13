import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-titulos',
  templateUrl: './titulos.component.html',
  styleUrls: ['./titulos.component.scss']
})
export class TitulosComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  user:string = ""
  pass:string = ""
  title = ''

  login () {
    alert("Successfully logged in.") 
    this.title = `Welcome, ${this.user}`
  }

  escribir (event) {
    if (event.key == "Enter") {
      this.title = `Welcome, ${this.user}`
    }
  }

  cambiarTamano(event,tipo) {
    if (tipo == true) {
      event.srcElement.style.border = "5px solid green"
    }else{
      event.srcElement.style.border = "0px"
    }
    
  }
}
