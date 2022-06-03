import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeFilter'
})
export class PipeFilterPipe implements PipeTransform {
  transform(cardDisplay: any[], filter: Object): any {
    if (!cardDisplay || !filter || filter==="None") {
        return cardDisplay;
    }
    // filter items array, items which match and return true will be
    // kept, false will be filtered out
    return cardDisplay.filter(card => card.severity === filter);
}

}
