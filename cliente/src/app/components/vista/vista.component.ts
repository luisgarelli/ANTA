import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vista',
  templateUrl: './vista.component.html',
  styleUrls: ['./vista.component.css']
})
export class VistaComponent implements OnInit {


  titulo:String ="Vista formulario";

  provincias = [{
    "id": "1",
    "provincia": "Buenos Aires",
    "capital": "La Plata",
    
  },
  {
    "id": "2",
    "provincia": "Catamarca",
    "capital": "San Fernando del Valle de Catamarca",
    
  },
  {
    "id": "3",
    "provincia": "Chaco",
    "capital": "Resistencia",
    
  },
  {
    "id": "4",
    "provincia": "Chubut",
    "capital": "Rawson",
    
  },
  {
    "id": "5",
    "provincia": "Córdoba",
    "capital": "Córdoba",
    
  },
  {
    "id": "6",
    "provincia": "Corrientes",
    "capital": "Corrientes",
    
  },
  {
    "id": "7",
    "provincia": "Entre Ríos",
    "capital": "Paraná",
    
  },
  {
    "id": "8",
    "provincia": "Formosa",
    "capital": "Formosa",
    
  },
  {
    "id": "9",
    "provincia": "Jujuy ",
    "capital": "San Salvador de Jujuy",
    
  },
  {
    "id": "10",
    "provincia": "La Pampa ",
    "capital": "Santa Rosa",
    
  },

  {
    "id": "11",
    "provincia": "La Rioja ",
    "capital": "La Rioja",
    
  },
  {
    "id": "12",
    "provincia": "Mendoza ",
    "capital": "Mendoza",
    
  },
  {
    "id": "13",
    "provincia": "Misiones ",
    "capital": "Posadas",
    
  },
  {
    "id": "14",
    "provincia": "Neuquén ",
    "capital": "Neuquén ",
    
  },
  {
    "id": "15",
    "provincia": "Río Negro ",
    "capital": "Viedma ",
    
  },
  {
    "id": "16",
    "provincia": "Salta ",
    "capital": "Salta  ",
    
  },
  {
    "id": "17",
    "provincia": "San Juan",
    "capital": "San Juan ",
    
  },
  {
    "id": "18",
    "provincia": "San Luis",
    "capital": "San Luis ",
    
  },
  {
    "id": "19",
    "provincia": "Santa Cruz",
    "capital": "Río Gallegos",
    
  },

 {
    "id": "20",
    "provincia": "Santa Fe",
    "capital": "Santa Fe de la Vera Cruz",
    
  },
  {
    "id": "21",
    "provincia": "Santiago del Estero",
    "capital": "Santiago del Estero",
    
  },
  {
    "id": "22",
    "provincia": "Tierra del Fuego, Antártida e Islas del Atlántico Sur",
    "capital": "Ushuaia",
    
  },

  {
    "id": "23",
    "provincia": "Tucumán",
    "capital": "San Miguel de Tucumán",
    
  }];
  constructor() { }

  ngOnInit(): void {

  }
  procesar():void{
    console.log("Uso de procesar");
    }

}
