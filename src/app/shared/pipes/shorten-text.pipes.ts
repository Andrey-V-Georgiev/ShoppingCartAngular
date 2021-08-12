import {Pipe, PipeTransform} from "@angular/core";

@Pipe({name: 'shorten'})
export class ShortenTextPipe implements PipeTransform {

    transform(text: string) {
        if (text.length > 100) {
            text = `${text.substr(0, 85)}`;
        }
        return text;
    }
}
