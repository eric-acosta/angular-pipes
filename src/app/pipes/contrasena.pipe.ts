import { Pipe, PipeTransform } from '@angular/core';
import { stringify } from 'querystring';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, activar:boolean=false): string {
    let result=value;
    if (activar){
      result = '*'.repeat(value.length);  
    }


    return result;
  }

}
