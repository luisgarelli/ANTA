import { Component, OnInit } from '@angular/core';
import { Auto } from 'src/app/models/autosModel';
import { AutosService } from '../../services/autos.service';
import { Slot } from 'src/app/models/slotsModel';
import { SlotService } from 'src/app/services/slot.service';
import { Historial } from 'src/app/models/historialModel';
import { HistorialService } from '../../services/historial.service';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-autos-historial',
  templateUrl: './autos-historial.component.html',
  styleUrls: ['./autos-historial.component.css']
})
export class AutosHistorialComponent implements OnInit {

  auto: Auto;
  autos:any=[];
  slot: Slot;
  slots:any=[];
  historia: Historial;
  historial:any=[];

  constructor(private autosService:AutosService, private slotService:SlotService, private historialService:HistorialService)
  {
    this.auto={  patente:"", telefono:"", descripcion:"" }
    this.slot={  slot:"", descripcion:"" }
    this.historia={ 	auto_id:"", slot_id:"", f_inicial:"", f_final:"" }
  }

  ngOnInit(): void{
    this.historialService.listarTabla().subscribe(
			res => {console.log("Datos del Servicio");
      console.log(res);
      this.historial = res 
    },
			err => console.log(err)
		)
  }

  BuscarAuto(auto_id: string)
  {
    const auto: any = this.autosService.buscarAuto(auto_id)

    return auto.patente;
  }
}
