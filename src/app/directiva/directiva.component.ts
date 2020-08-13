import { Component, OnInit } from '@angular/core';

interface Phone{
  brand: string,
  model: string,
  stock: number,
  sku: number
}

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
  styleUrls: ['./directiva.component.scss']
})

export class DirectivaComponent implements OnInit {


  products:Array<Phone> = [{
    brand: "Apple",
    model: "iPhone X",
    stock: 2000,
    sku: 239478084
  },
  {
    brand: "Apple",
    model: "iPhone 11 Pro",
    stock: 3500,
    sku: 812552812
  },
  {
    brand: "Samsung",
    model: "Galaxy S20",
    stock: 4000,
    sku: 658234564
  },
  {
    brand: "Samsung",
    model: "Galaxy J4+",
    stock: 10000,
    sku: 982423434
  }
]
  constructor() { }

  ngOnInit(): void {
    
  }

  selected (brand,model) {
    alert("You have selected: "+brand+" "+model)
  }

}
