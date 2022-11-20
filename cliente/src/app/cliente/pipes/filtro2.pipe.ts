import { Pipe, PipeTransform } from '@angular/core';
import { Animal } from 'src/app/models/animalModel';
@Pipe({
  name: 'filtro2'
})
export class Filtro2Pipe implements PipeTransform {

  transform(animales: Animal[], page:number = 0,search: string ='' ): Animal[] {
   if(search.length === 0)

   
    return animales.slice(page, page + 5);
   const filtered = animales.filter( user => user.tipo?.includes (search));
   return filtered.slice(page, page+5);
  }

}
