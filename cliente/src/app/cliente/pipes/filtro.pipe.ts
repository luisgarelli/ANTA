import { Pipe, PipeTransform } from '@angular/core';
import { Animal } from 'src/app/models/animalModel';
@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  

 transform(animales: Animal[], page:number = 0,search: string =''): Animal[] {
   if(search.length === 0 )

   //mandar otro arumento en array transform. de la segunda caja
    return animales.slice(page, page + 5);
   // const filtere = animales.filter( user => user.tipo?.includes  (loc));
   const filtered = animales.filter( user => user.tamanio?.includes  (search))
  // const filtered2 = animales.filter( user => user.tipo?.includes (search));
   return filtered.slice(page, page+5);
   
  
  }


}
