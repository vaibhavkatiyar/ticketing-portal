import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'idSearchFilter'
})
export class IdSearchFilterPipe implements PipeTransform {
  transform(cardDisplay: any[], filter: String): any {
    if (!cardDisplay || !filter) {
        return cardDisplay;
    }
    // filter items array, items which match and return true will be
    // kept, false will be filtered out
    return cardDisplay.filter(card => card.subject.includes(filter));
}
  

}
