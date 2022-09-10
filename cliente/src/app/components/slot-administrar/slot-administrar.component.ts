import { Component, OnInit } from '@angular/core';
import { SlotService } from '../../services/slot.service';

@Component({
  selector: 'app-slot-administrar',
  templateUrl: './slot-administrar.component.html',
  styleUrls: ['./slot-administrar.component.css']
})
export class SlotAdministrarComponent implements OnInit
{
  slot={ slot:"", descripcion:"" };
  slots:any=[];
  slotModificado={ id_slot:"", slot:"", descripcion:"" };
  slotBorrado={ id_slot:""};
  btnStateAgregar:boolean=true; 
  btnStateModificar:boolean=true;
  btnStateBorrar:boolean=true;

  constructor(private slotService:SlotService) 
  {
    this.slotService.listarSlot().subscribe
    (
			res => {console.log("Datos del Servicio");
      console.log(res);
      this.slots = res 
    },
			err => console.log(err)
		)
  }

  AgregarSlot()
  {
    if (this.slot.slot != "")
    {
      console.log("Slot agregado correctamente");
      this.slotService.guardarSlot(this.slot).subscribe()
    }
  }

  ModificarSlot()
  {
    if (this.slotModificado.id_slot != "")
    {
      console.log(this.slotModificado.id_slot);
      console.log("Slot modificado correctamente");
      this.slotService.modificarSlot(this.slotModificado.id_slot,this.slotModificado).subscribe()
    }
  }

  BorrarSlot()
  {
    if (this.slotBorrado.id_slot != "")
    {
      console.log(this.slotBorrado.id_slot);
      console.log("Slot borrado correctamente");
      this.slotService.eleminarSlot(this.slotBorrado.id_slot).subscribe()
    }
  }

  ActivarAgregar($event: any): void
  {
    if ($event != "")
    {
      this.btnStateAgregar=false;
    }
  }

  ActivarModificar($event: any): void
  {
    if ($event != "")
    {
      this.btnStateModificar=false;
    }
  }

  ActivarBorrar($event: any): void
  {
    if ($event != "")
    {
      this.btnStateBorrar=false;
    }
  }

  ngOnInit(): void {
  }

}
