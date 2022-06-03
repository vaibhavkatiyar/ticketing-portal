import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFilter'
})
export class DateFilterPipe implements PipeTransform {

  transform(cardDisplay: any[], filter: Object): any {
    if (!cardDisplay || !filter) {
        return cardDisplay;
    }

    if(filter === 'newest' )
    {
      return cardDisplay.sort((a: any, b: any) => {
      return <any>new Date(b.date) - <any>new Date(a.date);})
    }
    // filter items array, items which match and return true will be
    // kept, false will be filtered out
    
    if(filter === 'oldest' || filter==="none")
    {
        return cardDisplay.sort((a: any, b: any) => {
        return <any>new Date(a.date) - <any>new Date(b.date);
    })
    };
}

}
