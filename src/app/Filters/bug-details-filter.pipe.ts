import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bugDetailsFilter'
})
export class BugDetailsFilterPipe implements PipeTransform {

  transform(cardDisplay: any[], filter:any) {
    if (!cardDisplay || !filter) {
      return cardDisplay;
  }

  return cardDisplay.filter(card => card.id == filter);
 }
}
