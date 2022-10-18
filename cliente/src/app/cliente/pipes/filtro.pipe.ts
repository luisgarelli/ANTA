import { Pipe, PipeTransform } from '@angular/core';
import { Animal } from 'src/app/models/animalModel';
@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(animales: Animal[], page:number = 0 ): Animal[] {
    
    return animales.slice(page, page = 11);
  }

}
