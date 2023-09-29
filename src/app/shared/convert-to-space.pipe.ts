import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name : "converToSpacePipe"
})

export class ConvertToSpacePipe implements PipeTransform{
    transform(value: string, character: string) {
        return value.replace(character, ' ');
    }

}