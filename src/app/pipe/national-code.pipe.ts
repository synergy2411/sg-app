import { Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name : 'nationalCode'
})
export class NationalCodePipe implements PipeTransform{
    transform(value : number, arg : any){
        return "+" + arg + "-" + value;
    }
}