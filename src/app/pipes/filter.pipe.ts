import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure : false
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filteredStatus : string, prop : string): any {
    if(value.length == 0 || filteredStatus == ""){
      return value;
    }
    let resultArray = [];
    for(let item of value){
      if(filteredStatus == item[prop]){
        resultArray.push(item);
      }
    }
    return resultArray;
  }

}
